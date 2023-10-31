const express = require('express');
const router = express.Router();
const messages = require('../Messages');

router.get('/', function (req, res, next) {
  res.render('form', { title: 'Mini Message Board' });
});

router.post('/', (req, res) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date().toLocaleString('en-US'),
  };

  if (!newMessage.text || !newMessage.user) {
    return res.status(400).json({ msg: 'Please include a text and user' });
  }
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
