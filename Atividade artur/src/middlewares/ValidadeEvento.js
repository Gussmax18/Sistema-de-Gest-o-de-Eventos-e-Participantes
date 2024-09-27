const validateEvento = (req, res, next) => {
    const { nome, data, localizacao } = req.body;
  
    // preenchido | nao preenchido
    if (!nome|| !data || !localizacao ) {
      return res.status(400).json({
        msg: "Campos invalidos, revise caro amigo.",
      });
    }
  
    // pode avançar
    return next();
  };
  
  const validateEventoId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({
        msg: "Parametro faltando",
      });
    }
  
    return next();
  };
  
  module.exports = { validateEvento, validateEventoId };
  