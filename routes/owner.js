const express = require("express");
const router = express.Router();
const { ownerById, read, getAllOwners } = require("../controllers/owner");

router.get("/", getAllOwners)

router.get("/:ownerId", read);

router.param("ownerId", ownerById);

module.exports = router;