const { TaxiRepository } = require('../repository/index')

class TaxiService {
    constructor() {
        this.taxiRepository = new TaxiRepository();
    }

    async create(data) {
        try {
            console.log(data);
            const taxi = await this.taxiRepository.create(data);
            console.log(taxi);
            return taxi;
        } catch (error) {
            console.log("Something went wrong at service layer create function");
            throw { error };
        }
    }

    async update(data, taxiId) {
        try {
            const taxi = await this.taxiRepository.update(data, taxiId);
            return taxi;
        } catch (error) {
            console.log("Something went wrong at service layer update function");
            throw { error };
        }
    }

    async delete(taxiId) {
        try {
            const response = await this.taxiRepository.delete(taxiId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer delete function");
            throw { error };
        }
    }

    async get(taxiId) {
        try {
            const taxi = await this.taxiRepository.get(taxiId);
            return taxi;
        } catch (error) {
            console.log("Something went wrong at service layer get function");
            throw { error };
        }
    }

    async getAll() {
        try {
            const taxi = await this.taxiRepository.getAll();
            return taxi;
        } catch (error) {
            console.log("Something went wrong at service layer getAll function");
            throw { error };
        }
    }

    async getByCityId(idOfCity) {
        try {
            const taxi = await this.taxiRepository.getByCityId(idOfCity);
            return taxi;
        } catch (error) {
            console.log("Something went wrong at service layer getByCityId function");
            throw { error };
        }
    }
}

module.exports = TaxiService;