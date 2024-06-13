const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT, DB_SYNC } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
// const {User, Role} = require('./models/index');

const setUpAndStartServer = async () => {
    
    const corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200,// some legacy browsers (IE11, various SmartTVs) choke on 204
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type', 'Access-Control-Allow-Headers']
      }
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(cors(corsOptions));

    app.use('/api', apiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`Server started on PORT:${PORT}`);

        // if(process.env.DB_SYNC) {
        //     db.sequelize.sync({alter: true});
        // }

        // const u1 = await User.findByPk(4);
        // const r1 = await Role.findOne({
        //     where: {
        //         id: 3
        //     }
        // });
        // const response = await u1.addRole(r1);
        // console.log(response);
    });

}

setUpAndStartServer();