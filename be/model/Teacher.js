// models/Teacher.js
const mongoose = require('mongoose');

const degreeSchema = new mongoose.Schema({
    type: String,
    school: String,
    major: String,
    year: Number,
    isGraduated: Boolean,
});

const teacherSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    code: { type: String, unique: true, required: true },
    startDate: Date,
    endDate: Date,
    teacherPositions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TeacherPosition' }],
    degrees: [degreeSchema],
}, { timestamps: true }); // Tự động thêm trường createdAt và updatedAt

module.exports = mongoose.model('Teacher', teacherSchema);
