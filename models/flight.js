var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    arline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number, 
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            return new Date().getFullYear();
        } 
    }
});

module.exports = mongoose.model('Movie', movieSchema);