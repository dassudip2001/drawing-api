import { Request, Response, NextFunction } from 'express';
import * as categoryService from '../services/categoryService';
import { ApiError } from '../middlewares/errorHandler';
import { CategoryInput } from '../types/category';

export const all = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const categories = await categoryService.allCategory();
    res.json({
      status: 'success',
      data: categories
    });
  } catch (error) {
    next(new ApiError(500, 'Failed to fetch categories'));
  }
};

export const create = async (
  req: Request<{}, {}, CategoryInput>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json({
      status: 'success',
      data: category
    });
  } catch (error) {
    next(new ApiError(500, 'Failed to create category'));
  }
};

export const find = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const category = await categoryService.findCategoryById(req.params.id);
    if (!category) {
      throw new ApiError(404, 'Category not found');
    }
    res.json({
      status: 'success',
      data: category
    });
  } catch (error) {
    next(error instanceof ApiError ? error : new ApiError(500, 'Failed to fetch category'));
  }
};

export const update = async (
  req: Request<{ id: string }, {}, CategoryInput>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body);
    res.json({
      status: 'success',
      data: category
    });
  } catch (error) {
    next(new ApiError(500, 'Failed to update category'));
  }
};

export const destroy = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await categoryService.deleteCategory(req.params.id);
    res.json({
      status: 'success',
      message: 'Category deleted successfully'
    });
  } catch (error) {
    next(new ApiError(500, 'Failed to delete category'));
  }
};