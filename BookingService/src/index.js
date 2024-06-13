const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./config/serverConfig');
const  apiRoutes = require('./routes/index');
// const {HotelService} = require('./services/index');
const db = require('./models/index')

const setUpAndStartServer = async () => {
    const app = express();

    const corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200,// some legacy browsers (IE11, various SmartTVs) choke on 204
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type', 'Access-Control-Allow-Headers']
      }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(cors(corsOptions));
    
    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started on PORT:${PORT}`);

        if(true){
            // db.sequelize.sync({alter: true})
        }
    });
}

setUpAndStartServer();