const TicketService = require('../services/email-service');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully registered an email reminder',
            err: {}
        });
    } catch (error) {
        return res.status(200).json({
            data: {},
            success: false,
            message: 'Unable to register an email reminder',
            err: error
        });
    }
}

module.exports = {
    create
};
