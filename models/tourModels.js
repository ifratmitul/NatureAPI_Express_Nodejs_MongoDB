const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A tour must have name'],
        trim:true,
        unique: true
    },
    duration:{
        type : Number,
        required: [true, 'A tour must have duration']
    },
    maxGroupSize:{
        type:Number,
        required: [true, 'A tour must have max group size']
    },
    difficulty:{
        type: String,
        required: [true, 'A tour must have difficulty']
    },
    ratingsAverage: {
        type: Number,
        required: [true, 'A tour must have rating']
    },
    ratingQuantity:{
        type: Number,
        default: 0
    },
    price:{
        type: Number,
        required: [true, 'A tour must have price']
    },
    priceDiscount: Number,
    summary:{
        type:String,
        trim:true,
        required: [true, 'A tour must have summery']
    },
    imageCover:{
        type:String,
        required: [true, 'A tour must have image cover']
        
    },
    images:[String],
    createdAt:{
        type:Date,
        default: Date.now(),
        select: false
    },
    startDates: [Date]

})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
