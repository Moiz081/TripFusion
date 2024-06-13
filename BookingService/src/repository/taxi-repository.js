const { Taxi } = require('../models/index');
const { AppError, ValidationError } = require('../utils/index');
const { StatusCodes } = require('http-status-codes');

class TaxiRepository {

    async create(data) {
        try {
            console.log("This is TaxiRepository",data);
            const taxi = await Taxi.create(data);
            return taxi;
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

    async getByUserID(userId) {
        try {
            console.log(userId);
            const taxi = await Taxi.findAll({where: { userId: userId}});
            return taxi;
        } catch (error) {
            throw new AppError(
                'RepositoryError', 
                'Cannot update Booking', 
                'There was some issue updating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }  
        }
}

module.exports = TaxiRepository;