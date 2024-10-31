 // models/TeacherPosition.js
const mongoose = require('mongoose');

const teacherPositionSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Tên vị trí
    code: { type: String, unique: true, required: true }, // Mã vị trí
    description: { type: String }, // Mô tả vị trí
    isActive: { type: Boolean, default: true }, // Trạng thái hoạt động
    isDeleted: { type: Boolean, default: false }, // Trạng thái đã xóa
});

module.exports = mongoose.model('TeacherPosition', teacherPositionSchema);
