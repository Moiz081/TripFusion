const express = require('express');

const FlightMiddlewareValidate = require('../../middlewares/index')
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const HotelController = require('../../controllers/hotel-controller');
const TaxiController = require('../../controllers/taxi-controller');
const AirplaneController = require('../../controllers/airplane-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/cities', CityController.getAll);
router.patch('/city/:id', CityController.update);


router.post('/flights',FlightMiddlewareValidate.FlightMiddleware ,FlightController.create);
router.get('/flights/:id', FlightController.get);
router.get('/flights', FlightController.getAll);
router.patch('/flights/:id', FlightController.update);
router.get('/flightsByCityId/:id', FlightController.getByCityId)


router.post('/airports', AirportController.create);
router.get('/airports/:id', AirportController.get);
router.get('/airports', AirportController.getAll);

router.post('/airplane', AirplaneController.create);
router.get('/airplane/:id', AirplaneController.get);
router.get('/airplane', AirplaneController.getAll);


router.post('/hotels', HotelController.create);
router.patch('/hotels/:id', HotelController.update);
router.delete('/hotels/:id', HotelController.destroy);
router.get('/hotels/:id', HotelController.get);
router.get('/hotels', HotelController.getAll);
router.get('/hotelsByCity/:id', HotelController.getByCityId);


router.post('/taxi', TaxiController.create);
router.patch('/taxi/:id', TaxiController.update);
router.delete('/taxi/:id', TaxiController.destroy);
router.get('/taxi/:id', TaxiController.get);
router.get('/taxi', TaxiController.getAll);
router.get('/taxiByCity/:id', TaxiController.getByCityId)

module.exports = router;