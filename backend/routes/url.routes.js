const express = require("express");
const crypto = require("crypto");
const Url = require("../models/url");

const router = express.Router();

router.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "URL is required" });
    }

    const shortCode = crypto.randomBytes(4).toString("hex");

    const url = await Url.create({
      shortCode,
      originalUrl
    });

    res.json({
      shortUrl: `http://localhost:3000/${shortCode}`
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.code });

    if (!url) {
      return res.status(404).send("URL not found");
    }

    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
