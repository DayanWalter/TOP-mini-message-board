const express = require('express');
const router = express.Router();
const messages = require('../Messages');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});
router.post('/', (req, res) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };

  if (!newMessage.text || !newMessage.user) {
    return res.status(400).json({ msg: 'Please include a text and user' });
  }
  messages.push(newMessage);
  // res.json(messages);
  res.redirect('/');
});

module.exports = router;
