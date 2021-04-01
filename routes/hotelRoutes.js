const express = require('express');
const hotelController = require('../controllers/hotelController');

const router = express.Router();


router.route('/')
    .get(hotelController.getAllHotels)


router.route('/:id')
    .get(hotelController.getHotelById)


module.exports = router;