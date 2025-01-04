import { Category } from '@prisma/client';
import prisma from '../config/db';
import {   CreateCategoryInput, UpdateCategoryInput } from '../validation/categoryValidation';

// all category
export const allCategory = async (): Promise<Category[]> => {
    try {
        return await prisma.category.findMany();
    } catch (error) {
        throw new Error(error);
    }
};

// create category
export const createCategory = async (data:CreateCategoryInput): Promise<Category> => {
    try {
        return await prisma.category.create({ data });
    } catch (error) {
        throw new Error(error);
    }
};

// find category by id
export const findCategoryById = async (id: string): Promise<Category> => {
    try {
        return await prisma.category.findUnique({ where: { id } });
    } catch (error) {
        throw new Error(error);
    }
};

// update category
export const updateCategory = async (id: string, data:UpdateCategoryInput): Promise<Category> => {
    try {
        return await prisma.category.update({ where: { id }, data });
    } catch (error) {
        throw new Error(error);
    }
};

// delete category
export const deleteCategory = async (id: string): Promise<Category> => {
    try {
        return await prisma.category.delete({ where: { id } });
    } catch (error) {
        throw new Error(error);
    }
};
