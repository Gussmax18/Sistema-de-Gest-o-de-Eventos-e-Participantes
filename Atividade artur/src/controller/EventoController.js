
const Evento = require("../models/Evento")



const EventoController = {

  create: async (req, res) => {
    try {
      const { nome, data, localizacao } = req.body;

      const eventoCriado = await Evento.create({ nome, data, localizacao });

      return res.status(200).json({
        msg: "Evento criado com sucesso!",
        evento: eventoCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, data, localizacao } = req.body;

      console.log("Atualizando o objeto");
      console.log({ id });
      console.log({ nome, data, localizacao });

      const eventoUpdate = await Evento.findByPk(id);

      if (eventoUpdate == null) {
        return res.status(404).json({
          msg: "evento nao encontrado",
        });
      }

      const updated = await eventoUpdate.update({ nome, data, localizacao });

      if (updated) {
        return res.status(200).json({
          msg: "Evento atualizado com sucesso!",
          evento: updated
        });
      }

      return res.status(500).json({
        msg: "Erro ao atualizar evento",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getAll: async (req, res) => {
    try {
      const eventos = await Evento.findAll();
      return res.status(200).json({
        msg: "eventos encontrados!",
        eventos,
      });


    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      // api/user/3516321
      // Primary Key
      // SELECT * FROM User WHERE id = {id}
      const eventoEncontrado = await User.findByPk(id);

      if (eventoEncontrado == null) {
        return res.status(404).json({
          msg: "Evento nao encontrado!",
        });
      }

      return res.status(200).json({
        msg: "Evento encontrado com sucesso!",
        evento: eventoEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  delete: async (req, res) => {
    try {
      // api/user/3178321
      const { id } = req.params;

      const eventoFinded = await Evento.findByPk(id);

      if (eventoFinded == null) {
        return res.status(404).json({
          msg: "evento nao encontrado",
        });
      }
      // Destruindo -> Deletando
      // As same it deleted
      await eventoFinded.destroy();

      return res.status(200).json({
        msg: "Participante deletado com sucesso!",
        evento: eventoFinded,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = EventoController;









