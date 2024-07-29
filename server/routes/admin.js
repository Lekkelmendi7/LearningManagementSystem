import express from 'express';
import { addLectures, createCourse, deleteLecture, deleteCourse, getAllStats, } from '../controllers/admin.js';
import { isAuth, isAdmin } from '../middleware/isAuth.js';
import { uploadFiles } from '../middleware/multer.js';

const router = express.Router();

router.post('/course/new', isAuth, isAdmin, uploadFiles, createCourse);
router.post('/course/:id', isAuth, isAdmin, uploadFiles, addLectures);
router.delete("/lectures/:id", isAuth, isAdmin, deleteLecture);
router.delete("/course/:id", isAuth, isAdmin, deleteCourse);
router.get("/stats", isAuth, isAdmin, getAllStats);

export default router;
