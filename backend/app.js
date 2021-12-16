// const mongoose = require('mongoose');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')


const errorMiddleware = require('./middlewares/errors')


// const connectDatabase = 'mongodb+srv://meiri45:meiriab12cd34@cluster0.7xddh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose.connect('mongodb+srv://meiri45:meiriab12cd34@cluster0.7xddh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {
//         useNewUrlParser: true, 
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//         }).then(() => {
//             console.log('connection successful');
//             }).catch((err) => console.log('no connection'));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());






// import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', order)

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app
