const express = require('express');
const router = express.Router();
const messages = require('../Messages');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

// Gets All Messages
// router.get('/', (req, res) => {
//   res.json(messages);
// });

router.post('/', (req, res) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };

  // if (!newMember.name || !newMember.email) {
  //   return res.status(400).json({ msg: 'Please include a name and email' });
  // }
  messages.push(newMessage);
  // res.json(messages);
  res.redirect('/');
});

module.exports = router;
