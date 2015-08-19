var router = require('express').Router();
// var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
      // var collection = global.db.collection('artists');
      res.render('templates/artists'/*, {artists: formattedArtists}*/);
      console.log('Artists eventually will show up here');

  // collection.find().toArray(function (err, artists) {
  //   var formattedArtists = artists.map(function (artist) {
  //     return {
  //       _id:       artist._id,
  //       name:      artist.name,
  //     };
  //   });

  });
// });

// router.post('/artists', function (req, res) {
//   var collection = global.db.collection('artists');

//   collection.save(req.body, function () {
//     res.redirect('/artists')
//   });
// });

// router.post('/order/:id/complete', function (req, res) {
//   var collection = global.db.collection('chickenNuggets');

//   collection.update(
//     {_id: ObjectID(req.params.id)},
//     {$set: {complete: true}},
//     function () {
//       res.redirect('/chickennuggets')
//     });
// });

module.exports = router;

