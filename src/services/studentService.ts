import { Students } from "@prisma/client";
import prisma from "../utils/prismaClient";

export const getAllStudents = async (): Promise<Students[]> => {
  return prisma.students.findMany();
};

export const getStudentById = async (id: number): Promise<Students | null> => {
  return prisma.students.findUnique({ where: { id } });
};

export const createStudent = async (
  data: Omit<Students, "id" | "createdAt" | "updatedAt">
): Promise<Students> => {
  return prisma.students.create({ data });
};

export const updateStudent = async (
  id: number,
  data: Partial<Students>
): Promise<Students> => {
  return prisma.students.update({ where: { id }, data });
};

export const deleteStudent = async (id: number): Promise<Students> => {
  return prisma.students.delete({ where: { id } });
};
