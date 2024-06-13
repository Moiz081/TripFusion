const { AirplaneService } = require('../services/index')

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: 'Successfully able to create an airplane',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while creating an airplane',
            err: {error}
        });
    }
}

const get = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: 'Successfully able to create an airplane',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while creating an airplane',
            err: {error}
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airplane = await airplaneService.getAllAirplane();
        return res.status(201).json({
            data: airplane,
            success: true,
            message: 'Successfully able to create an airplane',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while creating an airplane',
            err: {error}
        });
    }
}
module.exports = {
    create,
    get,
    getAll
};
