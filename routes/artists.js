var router = require('express').Router();
// var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
  var collection = global.db.collection('artists');


  collection.find().toArray(function (err, artists) {
    var formattedArtists = artists.map(function (artist) {
      return {
        _id:       artist._id,
        name:      artist.name,
        genre:     artist.genre
      };
    });
  res.render('templates/artists', {
    title: 'All the Artists!',
    artists: formattedArtists
  });

  console.log(formattedArtists);
  });
});

module.exports = router;

