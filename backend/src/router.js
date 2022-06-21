const express = require("express");

const { ItemController, EleveController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/eleve", EleveController.browse);
router.get("/eleve/:id", EleveController.read);
router.put("/eleve/:id", EleveController.edit);
router.post("/eleve", EleveController.add);
router.delete("/eleve/:id", EleveController.delete);

module.exports = router;
