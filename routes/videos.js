var express = require('express');
var router = express.Router();

/* GET videos listing. */
router.get('/video/list', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;