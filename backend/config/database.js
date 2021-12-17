const mongoose = require('mongoose');

// const connectDatabase = 'mongodb+srv://meiri45:<password>@cluster0.7xddh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect(connectDatabase, {
//         useNewUrlParser: true, 
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//         }).then(() => {
//             console.log('connection successful');
//             }).catch((err) => console.log('no connection'));
        
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
    // useNewUrlParser: true, 
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
    }).then(con => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
     })
}

module.exports = connectDatabase