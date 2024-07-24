import TryCatch from '../middleware/TryCatch.js'
import { Courses } from '../models/Courses.js'
import { Lecture } from '../models/Lecture.js'
import { User } from '../models/User.js'


export const getAllCourses = TryCatch(async (req, res) => {
    const courses = await Courses.find();
    res.json({
        courses,
    });
});

export const getSingleCourse = TryCatch(async (req, res) => {
    const course = await Courses.findById(req.params.id);

    res.json({
        course,
    });
});

