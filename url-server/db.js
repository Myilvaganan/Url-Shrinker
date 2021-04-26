const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const db= process.env.DB_URL;

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useFindAndModify:false,
            useUnifiedTopology: true,
            useNewUrlParser:true
        });

        console.log('MONGODB IS CONNECTED')
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;