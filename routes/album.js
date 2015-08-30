var router = require('express').Router();

router.get('/', function(req, res) {
  res.render('templates/album');
});

router.post('/add', function(req, res) {
  var collection = global.db.collection('albums');
  collection.save(req.body, function() {
    res.redirect('/albums');
  });
});

module.exports = router;
