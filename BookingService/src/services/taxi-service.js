const { TaxiRepository } = require('../repository/index')
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');
const axios = require('axios');

class TaxiService {

    constructor() {
        this.taxiRepository = new TaxiRepository();
    }
    async create(data) {
        try {
            console.log("this is data coming ", data);
            const taxiId = data.taxiId;
            const cityId = data.cityId;
            const userId = data.userId;
            const getTaxiRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/taxi/${taxiId}`;
            console.log(getTaxiRequestURL);
            const response = await axios.get(getTaxiRequestURL);

            console.log(response);
            console.log(response.data.data);
            let taxiData = response.data.data;
            console.log(taxiData);
            const taxiPayload = {...data, taxiId, userId, cityId};
            const taxi = await this.taxiRepository.create(taxiPayload);
            return taxi;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getByUserID(userId) {
        try {
            const taxi = await this.taxiRepository.getByUserID(userId);
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

module.exports = TaxiService;