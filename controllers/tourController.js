const Tour = require('./../models/tourModels');

exports.getAllTours = async (req, res) => {
   
   try {
    const queryObj = {...req.query}
    const excludedFields = ['page','sort','limit','fields'];
    excludedFields.forEach( el => delete queryObj[el]);
   // console.log(req.query, queryObj)

    const query= await Tour.find(queryObj);

    const tours = await query;
    res.status(200).json({
        status:'Success',
        results: tours.length,
        data:{
            tours
        }
    })
       
   } catch (error) {

    res.status(404).json({
        status: "Failed",
        message: error
    })
       
   }

};

exports.getTour = async(req, res) => {

try {

    const tours = await Tour.findById(req.params.id);
    res.status(200).json({
        status:'Success',
        results: tours.length,
        data:{
            tours
        }
    })

    
} catch (error) {
     res.status(404).json({
        status: "Failed",
        message: error
    })
       
}
}

exports.createTour = async (req, res) => {
    
    try{
        const newTour = await Tour.create(req.body)

        res.status(201).json({
            status : "success",
            data : {
                tour : newTour
            }
        })

    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message: err
        })
    }

}

exports.updateTour =  async (req, res)=> {

        try {

            const TourToUpdate = await Tour.findById(req.body.id, req.body, { new : true});
            res.status(200).json({
                status: 'Success',
                data : {
                    tour: TourToUpdate
                }
            })
            
        } catch (error) {

            res.status(400).json({
                status:'fail',
                message: err
            })
            
        }
}

exports.deleteTour = async (req, res)=> {

    try {
        await Tour.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            data : null
        })

        
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message: err
        })
    }
}


