const express = require('express');
const router = express.Router();

const { BookingController, HotelController, TaxiController } = require('../../controllers/index');

router.post('/flightBooking', BookingController.create);
router.get('/flightBooking/:id', BookingController.get);

router.post('/hotelBooking', HotelController.create);
router.get('/hotelBooking/:id', HotelController.get);

router.post('/taxiBooking', TaxiController.create);
router.get('/taxiBooking/:id', TaxiController.get);

router.post('/publish', BookingController.sendMessageToQueue);

module.exports = router;