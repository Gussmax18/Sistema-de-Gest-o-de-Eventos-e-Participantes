const validateParticipante = (req, res, next) => {
    const { nome, email, senha, eventoId } = req.body;
  
    // preenchido | nao preenchido
    if (!nome || !email || !senha || eventoId) {
      return res.status(400).json({
        msg: "Campos invalidos, revise caro amigo.",
      });
    }
  
    // pode avançar
    return next();
  };
  
  const validateParticipanteId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({
        msg: "Parametro faltando",
      });
    }
  
    return next();
  };
  
  module.exports = { validateParticipante, validateParticipanteId };
  