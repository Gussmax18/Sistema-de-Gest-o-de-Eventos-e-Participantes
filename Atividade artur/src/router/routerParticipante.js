const { Router } = require("express");
const ParticipanteController = require("../controller/ParticipanteController");


 const router = Router(); 

router.post("/participante", (req, res) => {
    ParticipanteController.create(req, res);
});


router.get("/participante", (req, res) => {
ParticipanteController.getAll(req, res);
});

router.delete("/participante/:id", (req, res) => {
ParticipanteController.delete(req, res);
});

router.put("/participante/:id", (req, res) => {
ParticipanteController.update(req, res);
});

router.get("/participante/:id", (req, res) => {
ParticipanteController.delete(req, res);
});

module.exports = router;