var mongoose = require('mongoose');

module.exports = function(url) {
    
    mongoose.connect('mongodb://' + url, function(err){
        if(err)
            console.log('Mongoose Error =>', err);
        else
            console.log('Mongoose is connected!');
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose is disconnected.');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Application closed and connection closed.');
            process.exit(0);
        });
    });
};

