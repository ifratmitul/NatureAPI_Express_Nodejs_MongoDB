const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`) );
//console.log(tours);


exports.checkId = (req, res, next, val) =>{
    console.log(`Tour id: ${val}`);
    if(+req.params.id > tours.length){
        return res.status(404).json({
            status: 'Fail',
            message: 'Invalid ID'
        });
    }
   next();

}

exports.checkBody =(req, res, next) => {

    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }

    next();
}

exports.getAllTours = (req, res) => {
    console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        reqTime : req.requestTime,
        results: tours.length,
        data: {
            tours
        },
    });
};

exports.getTour = (req, res) => {

    console.log(req.params);
    const id = +req.params.id;
    const tour = tours.find(el => el.id === id)
    if(!tour) { 
        return res.status(404).json({status: 'Failed to find anything'})
    }
  res.status(200).json({
        status: 'success',
        results: tour.length,
        data: {
            tour
        },
    });
}

exports.createTour = (req, res) => {

    //console.log(req.body);

    const newId = tours[tours.length -1 ].id + 1;
    const newTour = Object.assign({id : newId}, req.body);

    tours.push(newTour);
    
    
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours) , err => {

        res.status(201).json({
            status : "success",
            data : {
                tour : newTour
            }
        })
    })
}

exports.updateTour =  (req, res)=> {

    res.status(200).json({
        status: 'Success',
        data : {
            tour: 'Update tour here'
        }
    })
}

exports.deleteTour =  (req, res)=> {

    res.status(200).json({
        status: 'Success',
        data : {
            tour: 'delete tour here'
        }
    })
}


