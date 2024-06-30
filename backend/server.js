const mongoose = require('mongoose');
const express = require('express');
// const testRoutes = require('./routes/testRoutes') 
// const { User, Test, Question, Option, Response } = require('./models/testConduction');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/");

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

connectDB();
module.exports = connectDB;

const app = express();
app.use(express.json());
app.use('/api', require('./routes/testRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));