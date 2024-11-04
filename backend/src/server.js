const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require('cors');
const imagePlaceHolder = require('./middears/image-placeholder');
const app = express();


app.use(cors());
app.use('/public', imagePlaceHolder, express.static('public'));
app.use(express.json());

const userRoutes = require('./routes/user-routes');

const propsRoutes = require('./router/product-routes');

app.use(userRoutes);
app.use(propsRoutes);



app.listen(3000, () => {
    console.log("Servidor web inicializando em http://localhost:3000");
});