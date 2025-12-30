const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    const owner = await ownerModel.find();
    if (owner.length > 0) {
      return res
        .status(503)
        .send("You don't have permission to create new owner");
    }
    let { fullname, email, password, gstin } = req.body;
    let ownerCreated = await ownerModel.create({
      fullname,
      email,
      password,
      gstin,
    });
    res.status(201).send(ownerCreated);
  });
}

router.get("/", (req, res) => {
  res.send("owners Router");
});

module.exports = router;
