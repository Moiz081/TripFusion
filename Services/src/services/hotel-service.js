const { HotelRepository } = require('../repository/index');

class HotelService {
    constructor() {
        this.hotelRepository = new HotelRepository();
    }

    async create(data) {
        try {
            const hotel = await this.hotelRepository.create(data);
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async update(data, hotelId) {
        try {
            const hotel = await this.hotelRepository.update(data, hotelId);
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async delete(hotelId) {
        try {
            const response = await this.hotelRepository.delete(hotelId);
            return response;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async get(hotelId) {
        try {
            console.log("In service", hotelId);
            const hotel = await this.hotelRepository.get(hotelId);
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async getAll() {
        try {
            const hotel = await this.hotelRepository.getAll();
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async getByCityId(idOfCity) {
        try {
            const hotel = await this.hotelRepository.getByCityId(idOfCity);
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }
}

module.exports = HotelService;