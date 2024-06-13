const express = require('express');
const router = express.Router();

const { UserController } = require('../../controllers/index');
const { AuthRequestValidator } = require('../../middlewares/index');

router.post('/signup', UserController.create);

router.post(
    '/signIn',
    AuthRequestValidator.validateUserAuth,
    UserController.signIn
);

router.get('/isAuthenticated', UserController.isAuthenticated);

router.get('/isAdmin',
    AuthRequestValidator.validateIsAdmin,
    UserController.isAdmin
);

router.get('/isCustomer',
    UserController.isCustomer
);



module.exports = router;