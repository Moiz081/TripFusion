const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./config/serverConfig');
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');
const setupAndStartServer = () => {

    const app = express();

    const corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200,// some legacy browsers (IE11, various SmartTVs) choke on 204
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type', 'Access-Control-Allow-Headers']
      }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors(corsOptions));

    app.post('/api/v1/ticket', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);

        jobs();
    });
}

setupAndStartServer();