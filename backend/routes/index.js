var express = require('express');
var router = express.Router();
var request = require('sync-request');
var movieModel = require('../models/moviemodel')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET movies from the API */
router.get('/new-movies', function(req, res, next) { 
var result = request("GET", "https://api.themoviedb.org/3/discover/movie?api_key=b7f73dab20eb8e5b985d94ca67a9a009&language=fr-FR&region=FR&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=2020-01-01"); 
var resultApi = JSON.parse(result.body);
  res.json({result: true, movies:resultApi.results}); 
});


/* POST add movies to wishlist */
router.post('/wishlist-movie', async function(req, res, next) {
  var newMovie = new movieModel ({
                      movieName: req.body.name,
                      movieImg: req.body.img })
  var movieSaved = await newMovie.save()
  var result = false
  if(movieSaved.movieName) { result = true }
    res.json({result})
  });


/* POST Delete movies from wishlist */
router.delete('/wishlist-movie/:name', async function(req, res, next) {
  var deleteMovie = await movieModel.deleteOne({
    movieName: req.params.name })
    var result = false
    if(deleteMovie.deletedCount == 1) { result = true }
    res.json({result})
  });


  /* GET display movie wishlist */
router.get('/wishlist-movie', async function(req, res, next) {
  var movies = await movieModel.find()
  res.json({movies})
});

module.exports = router;
