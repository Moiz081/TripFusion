const { TaxiService } = require('../services/index');

const taxiService = new TaxiService();

const create = async (req, res) => {
    try {
        const taxi = await taxiService.create(req.body);
        return res.status(201).json({
            data: taxi,
            success: true,
            message: 'Successfully able to create a taxi',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while creating a taxi',
            err: {error}
        });
    }
}

const update = async (req, res) => {
    try {
        const taxi = await taxiService.update(req.body.data, req.body.taxiId);
        return res.status(201).json({
            data: taxi,
            success: true,
            message: 'Successfully able to update a taxi',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while updating a taxi',
            err: {error}
        });
    }
}

const destroy = async (req, res) => {
    try {
        const taxi = await taxiService.delete(req.body.taxiId);
        return res.status(201).json({
            data: taxi,
            success: true,
            message: 'Successfully able to delete a taxi',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while deleting a taxi',
            err: {error}
        });
    }
}

const get = async (req, res) => {
    try {
        const taxi = await taxiService.get(req.body.taxiId);
        return res.status(201).json({
            data: taxi,
            success: true,
            message: 'Successfully able to fetch a taxi',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while fetching a taxi',
            err: {error}
        });
    }
}

const getAll = async (req, res) => {
    try {
        const taxi = await taxiService.getAll();
        return res.status(201).json({
            data: taxi,
            success: true,
            message: 'Successfully able to fetch a taxi',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while fetching a taxi',
            err: {error}
        });
    }
}

const getByCityId = async (req, res) => {
    try {
        const taxi = await taxiService.getByCityId(req.body.idOfCity);
        return res.status(201).json({
            data: taxi,
            success: true,
            message: 'Successfully able to fetch a taxi',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Error occured while fetching a taxi',
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