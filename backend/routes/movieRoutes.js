const express = require('express');
const { fetchMovies } = require('../controllers/movieController');
const router = express.Router();

router.get('/', fetchMovies);

module.exports = router;