const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A tour must have name'],
        trim:true,
        unique: true
    },
    location:{
        type : String,
        required: [true, 'A hotel must have location']
    },

    description :{
        type : String,
        required: [true, 'A hotel must have description']
    },

    price :{
        type : Number,
        required: [true, 'A hotel must have price']
    }
   

})

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
