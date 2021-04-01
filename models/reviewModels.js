const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({

    hotelName: {
        type: String,
        required: [true, 'A review must have name'],
        trim:true,
        unique: true
    },

    description :{
        type : String,
        required: [true, 'A review must have description']
    },

    rating :{
        type : Number,
        required: [true, 'A review must have price']
    }
   

})

const Hotel = mongoose.model('Review', hotelSchema);

module.exports = Hotel;
