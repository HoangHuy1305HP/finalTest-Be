// index.js
require('dotenv').config(); // Thêm dòng này vào đầu tệp
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const teacherRoutes = require('./routes/teacherRoutes');
const teacherPositionRoutes = require('./routes/teacherPositionRoutes');

const app = express();
app.use(bodyParser.json());

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Sử dụng các route
app.use('/teachers', teacherRoutes);
app.use('/teacher-positions', teacherPositionRoutes);

// Bắt đầu server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
