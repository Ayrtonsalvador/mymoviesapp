var mongoose = require('mongoose'); 

var movieSchema = mongoose.Schema({ 
    movieName: String, 
    movieImg: String,
    movieDesc: String, 
    movieNote: Number,
    movieVote: Number
}); 

var movieModel = mongoose.model('mymovies', movieSchema); 

module.exports = movieModel;