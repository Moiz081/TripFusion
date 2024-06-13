const { Hotel } = require('../models/index');
const { AppError, ValidationError } = require('../utils/index');
const { StatusCodes } = require('http-status-codes');

class HotelRepository {
    async create(data) {
        try {
            console.log("This is hotelRepository",data);
            const hotel = await Hotel.create(data);
            return hotel;
        } catch (error) {
            console.log(error);
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError', 
                'Cannot create Booking', 
                'There was some issue creating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async update(hotelId, data) {
        try {
            const hotel = await Hotel.findByPk(hotelId);
            if(data.status) {
                hotel.status = data.status;
            }
            await hotel.save();
            return hotel;
        } catch (error) {
            throw new AppError(
                'RepositoryError', 
                'Cannot update Booking', 
                'There was some issue updating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async getByUserID(userId) {
        try {
            const hotel = await Hotel.findAll({where: { userId: userId}});
            return hotel;
        } catch (error) {
            throw new AppError(
                'RepositoryError', 
                'Cannot update Booking', 
                'There was some issue updating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }  
        }
    }

module.exports = HotelRepository;