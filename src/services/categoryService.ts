import { Category } from '@prisma/client';
import prisma from '../config/db';
import { CategoryInput } from '../types/category';
import { ApiError } from '../middlewares/errorHandler';

export const allCategory = async (): Promise<Category[]> => {
  return prisma.category.findMany();
};

export const createCategory = async (data: CategoryInput): Promise<Category> => {
  return prisma.category.create({ data });
};

export const findCategoryById = async (id: string): Promise<Category | null> => {
  return prisma.category.findUnique({ where: { id } });
};

export const updateCategory = async (
  id: string,
  data: CategoryInput
): Promise<Category> => {
  const category = await prisma.category.findUnique({ where: { id } });
  if (!category) {
    throw new ApiError(404, 'Category not found');
  }
  return prisma.category.update({ where: { id }, data });
};

export const deleteCategory = async (id: string): Promise<Category> => {
  const category = await prisma.category.findUnique({ where: { id } });
  if (!category) {
    throw new ApiError(404, 'Category not found');
  }
  return prisma.category.delete({ where: { id } });
};