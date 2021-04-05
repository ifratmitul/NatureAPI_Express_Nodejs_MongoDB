const mongoose = require('mongoose');
const slugify = require('slugify');
const tourSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A tour must have name'],
        trim:true,
        unique: true
    },
    slug: String,
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
    startDates: [Date],
    secretTour: {
        type: Boolean,
        default: false
    }

},
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
})

tourSchema.virtual('durationWeeks').get(function () {
    return this.duration / 7;
})
//Document middleware
tourSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true});
    next();

})

// tourSchema.pre('save', function(next){
//     console.log('Will save documents');
//     next();

// })

// tourSchema.post('save', function (doc, next) {

//     console.log(doc);
//     next();
    
// }S)

//Query Middleware

tourSchema.pre('find', function(next){
    this.find({secretTour: {$ne:true}})
    next()
})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
