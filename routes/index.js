const express = require('express');
const router = express.Router();
const messages = require('../Messages');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
