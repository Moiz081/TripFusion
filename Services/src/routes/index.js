const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

router.use('/v1', v1ApiRoutes);
// whenever you get /v1 as prefix plz map it to v1ApiRoutes

module.exports = router;

// We have created a separate folder because we don't want to keep routes with controllers.