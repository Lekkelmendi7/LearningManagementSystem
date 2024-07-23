import express from 'express';
import { createCourse } from '../controllers/admin.js';
import { isAuth, isAdmin } from '../middleware/isAuth.js';
import { uploadFiles } from '../middleware/multer.js';

const router = express.Router();

router.post('/courses/new', isAuth, isAdmin, uploadFiles, createCourse);

export default router;
