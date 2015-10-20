var express = require('express');
var router = express.Router();

router.get('/sandbox', function(req, res) {

  res.render('sandbox');
})

module.exports = router;

