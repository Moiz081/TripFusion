const { AirplaneRepository } = require('../repository/index');

const airplaneRepository = new AirplaneRepository();
class AirplaneService{
    async getAirplane(id) {
        try {
            const airplane = await airplaneRepository.getAirplane(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async create(data) {
        try {
            const airplane = await airplaneRepository.create(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async getAllAirplane() {
        try {
            const airplane = await airplaneRepository.getAllAirplane();
            return airplane;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }
}

module.exports = AirplaneService;