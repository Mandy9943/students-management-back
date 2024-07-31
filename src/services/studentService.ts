import { Students } from "@prisma/client";
import prisma from "../utils/prismaClient";

export const getAllStudents = async (
  page: number,
  limit: number
): Promise<{
  students: Students[];
  totalCount: number;
  totalPages: number;
}> => {
  const skip = (page - 1) * limit;

  const [students, totalCount] = await Promise.all([
    prisma.students.findMany({
      skip,
      take: limit,
    }),
    prisma.students.count(),
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return {
    students,
    totalCount,
    totalPages,
  };
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
