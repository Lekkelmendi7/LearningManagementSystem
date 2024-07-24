import TryCatch from '../middleware/TryCatch.js';
import {Courses} from '../models/Courses.js';
import { Lecture } from "../models/Lecture.js";
import {rm} from 'fs';
import fs from "fs";

export const createCourse = TryCatch(async (req, res) => {
    const {title, description, category, createdBy, duration, price} = req.body;

    const image = req.file;

    await Courses.create({
        title,
        description,
        category,
        createdBy,
        image: image?.path,
        duration,
        price,
    });

res.status(201).json({
    message: "Course Created Successfully",
    });
});

export const addLectures = TryCatch(async (req, res) => {
    const course = await Courses.findById(req.params.id);

    if(!course)
        return res.status(404).json({
    message: "No Course with this id",
    });

    const {title, description} = req.body

    const file = req.file

    const lecture = await Lecture.create({
        title,
        description,
        video: file?.path,
        course: course._id,
    });

    res.status(201).json({
        message: "Lecture added!",
        lecture,
    });
});

export const deleteLecture = TryCatch(async (req, res) => {
    const lecture = await Lecture.findById(req.params.id);
  
    rm(lecture.video, () => {
      console.log("Video deleted");
    });
  
    await lecture.deleteOne();
  
    res.json({ message: "Lecture Deleted" });
  });