const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require('cors');
const imagePlaceHolder = require('./middears/image-placeholder');
const app = express();
require('./database/association');

var helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by');

app.use(cors());
app.use('/public', imagePlaceHolder, express.static('public'));
app.use(express.json());

const userRoutes = require('./router/user-routes');

const propsRoutes = require('./router/product-routes');

const propsOptions = require('./router/option-routes');

app.use(userRoutes);
app.use(propsRoutes);
app.use(propsOptions);



app.listen(3000, () => {
    console.log("Servidor web inicializando em http://localhost:3000");
});