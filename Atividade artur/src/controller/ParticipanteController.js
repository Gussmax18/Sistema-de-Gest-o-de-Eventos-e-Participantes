
const Participante = require("../models/Participante");
const bcrypt = require("bcryptjs");


const ParticipanteController = {
    create: async (req, res) => {
      try {
        const { nome, senha, email, eventoId } = req.body;
  
        const hashSenha = await bcrypt.hash(senha, 10);
  
        const participanteCriado = await Participante.create({ nome, senha: hashSenha, email, eventoId });
  
        return res.status(200).json({
          msg: "Participante criado com sucesso!",
          user: participanteCriado,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Acione o Suporte" });
      }
    },
    update: async (req, res) => {
      try {
        const { id } = req.params; 
        const { nome, senha, email, eventoId } = req.body;
  
        console.log("Atualizando o objeto");
        console.log({ id });
        console.log({ nome, senha, email, eventoId });
  
        const participanteUpdate = await Participante.findByPk(id);
  
        if (participanteUpdate == null) {
          return res.status(404).json({
            msg: "participante nao encontrado",
          });
        }
  
        const updated = await participanteUpdate.update({ nome, senha,email,eventoId });
  
        if (updated) {
          return res.status(200).json({
            msg: "Participante atualizado com sucesso!",
            participante:updated
          });
        }
  
        return res.status(500).json({
          msg: "Erro ao atualizar participante",
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Acione o Suporte" });
      }
    },
    getAll: async (req, res) => {
      try {
        const participantes = await Participante.findAll();
        return res.status(200).json({
          msg: "Participante encontrados!",
          participantes,
        });
        /* 
        usuarios: [
          {..}, {..}, {..}
        ] */
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
        const participanteEncontrado = await User.findByPk(id);
  
        if (participanteEncontrado == null) {
          return res.status(404).json({
            msg: "Participante nao encontrado!",
          });
        }
  
        return res.status(200).json({
          msg: "Participante encontrado com sucesso!",
          participante: participanteEncontrado,
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
  
        const participanteFinded = await Participante.findByPk(id);
  
        if (participanteFinded == null) {
          return res.status(404).json({
            msg: "participante nao encontrado",
          });
        }
        // Destruindo -> Deletando
        // As same it deleted
        await participanteFinded.destroy();
  
        return res.status(200).json({
          msg: "Participante deletado com sucesso!",
          participante: participanteFinded,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Acione o Suporte" });
      }
    },
  };
  
  module.exports = ParticipanteController;
  