const { Taxi } = require('../models/index');

class TaxiRepository {
    async create(data) {
        try {
            const taxi = await Taxi.create(data);
            return taxi;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async update(data, taxiId) {
        try {
            const taxi = await Taxi.findByPk(taxiId);
            taxi.carName = data.carName;
            await taxi.save();
            return taxi;
        } catch (error) {
            console.log("Something went wrong at repository layer update function");
            throw { error };
        }
    }

    async delete(taxiId) {
        try {
            await taxi.destroy({
                where: {
                    id: taxiId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong at repository layer delete function");
            throw { error };
        }
    }

    async get(taxiId) {
        try {
            const taxi = await Taxi.findByPk(taxiId);
            return taxi;
        } catch (error) {
            console.log("Something went wrong at repository layer get function");
            throw { error };
        }
    }

    async getAll() {
        try {
            const taxi = await Taxi.findAll();
            return taxi;
        } catch (error) {
            console.log("Something went wrong at repository layer getAll function");
            throw { error };
        }
    }

    async getByCityId(idOfCity) {
        try {
            const taxi = await Taxi.findAll({ where: { cityId: idOfCity}});
            return taxi;
        } catch (error) {
            console.log("Something went wrong at repository getByCityId function");
            throw { error };
        }
    }

}

module.exports = TaxiRepository;