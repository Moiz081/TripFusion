const { TaxiService } = require('../services/index');

const taxiService = new TaxiService();

const create = async (req, res) => {
    try {
        const response = await taxiService.create(req.body)
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Succefully completed the booking',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a booking',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await taxiService.getByUserID(req.query.userId);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Succefully fetch a booking',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the booking',
            err: error
        });
    }
}

module.exports = {
    create,
    get
};
