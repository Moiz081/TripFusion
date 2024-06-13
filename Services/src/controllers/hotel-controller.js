const { HotelService } = require('../services/index');

const hotelService = new HotelService();

const create = async (req, res) => {
    try {
        const hotel = await hotelService.create(req.body);
        return res.status(201).json({
            data: hotel,
            success: true,
            message: 'Successfully able to create a hotel',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while creating a hotel',
            err: {error}
        });
    }
}

const update = async (req, res) => {
    try {
        const hotel = await hotelService.update(req.body.data, req.body.hotelId);
        return res.status(201).json({
            data: hotel,
            success: true,
            message: 'Successfully able to update a hotel',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while updating a hotel',
            err: {error}
        });
    }
}

const destroy = async (req, res) => {
    try {
        const hotel = await hotelService.delete(req.body.hotelId);
        return res.status(201).json({
            data: hotel,
            success: true,
            message: 'Successfully able to delete a hotel',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while deleting a hotel',
            err: {error}
        });
    }
}

const get = async (req, res) => {
    try {
        console.log("In controller1", req.params);
        const hotel = await hotelService.get(req.params);
        console.log("In controller2", hotel);

        console.log(hotel);
        return res.status(201).json({
            data: hotel,
            success: true,
            message: 'Successfully able to fetch a hotel',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while fetching a hotel',
            err: {error}
        });
    }
}

const getAll = async (req, res) => {
    try {
        const hotel = await hotelService.getAll();
        return res.status(201).json({
            data: hotel,
            success: true,
            message: 'Successfully able to fetch a hotel',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while fetching a hotel',
            err: {error}
        });
    }
}

const getByCityId = async (req, res) => {
    try {
        const hotel = await hotelService.getByCityId(req.query.idOfCity);
        console.log(hotel);
        return res.status(200).json({
            data: hotel,
            success: true,
            message: 'Successfully able to fetch a hotel',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while fetching a hotel',
            err: {error}
        });
    }
}

module.exports = {
    create,
    update,
    destroy,
    get,
    getAll,
    getByCityId
}