const axios = require('axios');

const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');
const { HotelRepository } = require('../repository/index');

class HotelService {

    constructor() {
        this.hotelRepository = new HotelRepository();
    }

    async create(data) {
        try {
            console.log("this is data coming ", data);
            const hotelId = data.hotelId;
            const cityId = data.cityId;
            const userId = data.userId;
            const getHotelRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/hotel/${hotelId}`;
            console.log(getHotelRequestURL);
            const response = await axios.get(getHotelRequestURL);

            console.log(response);
            console.log(response.data.data);
            let hotelData = response.data.data;
            console.log(hotelData);
            const hotelPayload = {...data, hotelId, userId, cityId};
            const hotel = await this.hotelRepository.create(hotelPayload);
            return hotel;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getByUserID(userId) {
        try {
            const hotel = await this.hotelRepository.getByUserID(userId);
            return hotel;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = HotelService;
