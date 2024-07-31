import { Request, Response } from "express";
import * as studentService from "../services/studentService";

export const getAllStudents = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const students = await studentService.getAllStudents(page, limit);
  res.json(students);
};

export const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await studentService.getStudentById(Number(id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, age, grade } = req.body;

    // Input validation
    if (!firstName || !lastName || !email || !age || !grade) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newStudent = await studentService.createStudent({
      firstName,
      lastName,
      email,
      age,
      grade,
    });

    res.status(201).json({
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create student" });
  }
};
export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName, email, age, grade } = req.body;
  try {
    const updatedStudent = await studentService.updateStudent(Number(id), {
      firstName,
      lastName,
      email,
      age,
      grade,
    });
    res.json(updatedStudent);
  } catch (error) {
    res.status(404).json({ message: "Student not found" });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedStudent = await studentService.deleteStudent(Number(id));
    res.json(deletedStudent);
  } catch (error) {
    res.status(404).json({ message: "Student not found" });
  }
};
