const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://m3gicula:13513523vV@vlad.ndx6fm1.mongodb.net/reviewsdb?appName=vlad';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB подключена!');
  } catch (err) {
    console.error('Ошибка подключения:', err);
    process.exit(1);
  }
};

module.exports = connectDB;