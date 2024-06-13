const { HotelService } = require('../services/index');

const hotelService = new HotelService();

const create = async (req, res) => {
    try {
        const response = await hotelService.create(req.body)
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
        const response = await hotelService.getByUserID(req.query.userId);
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
