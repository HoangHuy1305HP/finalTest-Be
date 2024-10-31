const express = require('express');
const Teacher = require('../model/Teacher'); // Đảm bảo đường dẫn đúng
const mongoose = require('mongoose')
const router = express.Router();

// GET: /teachers
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const teachers = await Teacher.find()
            .populate('userId')
            .skip((page - 1) * limit)
            .limit(limit);
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST: /teachers
router.post('/', async (req, res) => {
    const { userId, name, email, phoneNumber, address, identity, dob } = req.body;

    // Kiểm tra nếu userId hợp lệ
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId format." });
    }

    // Tạo mã giáo viên ngẫu nhiên
    const code = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 chữ số

    const newTeacher = new Teacher({
        userId: userId, // Lấy ID người dùng từ yêu cầu
        isActive: true,
        code,
        name,
        email,
        phoneNumber,
        address,
        identity,
        dob,
    });

    try {
        await newTeacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
