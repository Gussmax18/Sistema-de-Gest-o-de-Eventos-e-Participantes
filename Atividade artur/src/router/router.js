const { Router } = require("express");
const ParticipanteController = require("../controller/ParticipanteController");
const EventoController = require("../controller/EventoController");

const eventoRotas = require ('./routerEvento')

const participanteRotas = require ('./routerEvento')

const router = Router();

router.use ('/evento', eventoRotas);
router.use ('/participante',participanteRotas);



module.exports = router;

