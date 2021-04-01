const Hotel = require('./../models/hotelModels');
const APIFeatures = require('./../utils/apiFeatures');



exports.getAllHotels = async (req, res) => {
   
   try {

    const features = new APIFeatures(Hotel.find(), req.query)
                            .filter()
                            .sort()

    const hotels = await features.query;
   
    res.status(200).json({
        status:'Success',
        results: hotels.length,
        data:{
            hotels
        }
    })
       
   } catch (error) {

    res.status(404).json({
        status: "Failed",
        message: error
    })
       
   }

};

exports.getHotelById = async(req, res) => {

try {

    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({
        status:'Success',
        results: tours.length,
        data:{
            hotel
        }
    })

    
} catch (error) {
     res.status(404).json({
        status: "Failed",
        message: error
    })
       
}
}


