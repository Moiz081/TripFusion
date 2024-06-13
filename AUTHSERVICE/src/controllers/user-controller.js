const { UserService } = require('../services/index');

const userService = new UserService();

const create = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        console.log(user);
        return res.status(200).json({
            data: user,
            success: true,
            message: 'Successfully create a user',
            err: {}
        });
    } catch (error) {
        console.log(req.body);
        return res.status(error.statusCode).json({
            err: error.explanation,
            message: error.message,
            success: false,
            data: {},
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully able to signIn',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'user is authenticated and token is valid',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to authenticate',
            err: {error}
        });
    }
}

const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.useurId);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched whether the user is admin or not',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Access denied',
            err: {error}
        });
    }
}

const isCustomer = async (req, res) => {
    try {
        const response = await userService.isCustomer(req.body.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched whether the user is customer or not',
            err: {}
        }); 
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Access denied',
            err: {error}
        });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin,
    isCustomer
};