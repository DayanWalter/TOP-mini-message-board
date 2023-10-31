const express = require('express');
const router = express.Router();
const messages = require('../Messages');

router.get('/', function (req, res, next) {
  res.render('form', { title: 'Mini Message Board' });
});

// 'form', { title: 'Mini Message Board', messages }
module.exports = router;
