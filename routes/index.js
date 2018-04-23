var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ok', function(req, res, next) {
  res.render('tudook', { title: 'Express' });
});
router.get('/ok2', function(req, res, next) {
  res.render('tudook-1904', { title: 'Express' });
});
module.exports = router;
