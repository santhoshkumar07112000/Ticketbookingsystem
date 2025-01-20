const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;