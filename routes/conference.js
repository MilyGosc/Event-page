var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('home', { layout: "hero-layout" });
});

router.get('/speakers', function(req, res) {
  res.render('speakers');
});

router.get('/schedule', function(req, res) {
  res.render('schedule');
});

router.get('/venue', function(req, res) {
  res.render('venue');
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/ticket-order', function(req, res) {
  if (req.param('email') == null) {
    res.redirect('/');
  }
  res.render('ticket-order', {
    fullName: req.param('fullName'),
    email: req.param('email'),
    amount: req.param('amount'),
    sum: req.param('amount') * 199.99
  });
});

module.exports = router;
