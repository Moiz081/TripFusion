const { Hotel } = require('../models/index');

class HotelRepository {
    async create(data) {
        try {
            const hotel = await Hotel.create(data);
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async update(data, hotelId) {
        try {
            const hotel = await Hotel.findByPk(hotelId);
            hotel.hotelName = data.name;
            await hotel.save();
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async delete(hotelId) {
        try {
            await Hotel.destroy({
                where: {
                    id: hotelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async get(hotelId) {
        try {
            console.log("In repo1",hotelId);
            const hotel = await Hotel.findAll({where: hotelId});
            console.log("In repo2",hotel);
            return hotel;
        } catch (error) {
            console.log(error);
            console.log("Something went wrong at repository layer get function", error);
            throw { error };
        }
    }

    async getAll() {
        try {
            const hotel = await Hotel.findAll();
            console.log("In repository", hotel);
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

    async getByCityId(idOfCity) {
        try {
            const hotel = await Hotel.findAll({ where: { cityId: idOfCity}});
            return hotel;
        } catch (error) {
            console.log("Something went wrong at repository layer create function");
            throw { error };
        }
    }

}

module.exports = HotelRepository;