var mongoose = require('mongoose');

var USERNAME = USER_NAME;
var PASSWORD = PASS_WORD;

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,      
    useUnifiedTopology : true}

mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.isz5o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
    options, 
    function(err) {  
        console.log(err);} );

module.exports = mongoose
