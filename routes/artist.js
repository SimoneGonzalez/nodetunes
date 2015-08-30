var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('templates/artist');
})


router.post('/add', function(req, res) {
  var collection = global.db.collection('artists');
  collection.save(req.body, function() {
    res.redirect('/artists');
  })
});
module.exports = router;
