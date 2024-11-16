const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const authRouter = require('./routes/auth');
const productRouter = require('./routes/products');
const orderRouter = require('./routes/orders');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.listen(port, () => console.log(`Listening on localhost:${port}`));