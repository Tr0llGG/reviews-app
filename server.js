const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const Review = require('./models/review.js');

app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка получения отзывов' });
  }
});

app.post('/reviews', async (req, res) => {
  try {
    const { name, text } = req.body;
    const review = new Review({ name, text });
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка сохранения отзыва' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});