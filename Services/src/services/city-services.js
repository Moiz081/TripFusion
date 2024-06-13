const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
        const city = await this.cityRepository.createCity(data);
        return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    // async bulkCreateCity(data) {
    //     try {
    //         const cities = await this.cityRepository.bulkCreateCity(data);
    //         return citiesl
    //     } catch (error) {
    //         console.log("Something went wrong at repository layer create function");
    //         throw {error};
    //     }
    // }

    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(data, cityId){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    
    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities(filter);
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer getAllCities");
        }
    }
}

module.exports = CityService;