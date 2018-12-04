var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
  console.log('hello')
});

module.exports = router;
