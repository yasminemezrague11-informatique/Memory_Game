const express = require('express');
const router = express.Router();
const Score = require('../models/Score');


router.get('/', async (req, res) => {
  try {
    const scores = await Score
      .find()
      .sort({ coups: 1 })
      .limit(5);

    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


router.post('/', async (req, res) => {
  const { pseudo, coups } = req.body;

  if (!pseudo || !coups) {
    return res.status(400).json({
      success: false,
      message: 'Pseudo et coups requis'
    });
  }

  try {
    const newScore = new Score({ pseudo, coups });
    await newScore.save();

    res.json({
      success: true,
      message: 'Score sauvegardé'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

module.exports = router;
