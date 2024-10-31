// routes/teacherPositionRoutes.js
const express = require('express');
const TeacherPosition = require('../model/TeacherPosition'); // Đảm bảo rằng bạn đã tạo model TeacherPosition

const router = express.Router();

// GET: /teacherPositions
router.get('/', async (req, res) => {
    try {
        const teacherPositions = await TeacherPosition.find();
        res.json(teacherPositions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST: /teacherPositions
router.post('/', async (req, res) => {
    const { name, code, description } = req.body; // Sử dụng đúng tên trường

    const newPosition = new TeacherPosition({
        name, // Tên vị trí
        code, // Mã vị trí
        description, // Mô tả vị trí
    });

    try {
        const savedPosition = await newPosition.save();
        res.status(201).json(savedPosition);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
