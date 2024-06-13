const validateUserAuth = (req, res, next) => {
    if( !req.body.email || ! req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'Email or password missing in the request'
        });
    }
    next();
}

const validateIsAdmin = (req, res, next) => {
    if( !req.body.userId) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'User id not given'
        });
    }
    next();
}

module.exports = {
    validateUserAuth,
    validateIsAdmin
}