/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';
import { allCategory, createCategory, deleteCategory, findCategoryById, updateCategory } from '../services/categoryService';
import { CreateCategoryInput, UpdateCategoryInput } from '../validation/categoryValidation';

export const all = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await allCategory();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const create = async (req: Request<{},{}, CreateCategoryInput>, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        
       const category= await createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const find=async(req: Request<{id:string}>, res: Response): Promise<void> => {
    try {
        const data=await findCategoryById(req.params.id);
        res.json(data);
    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const update = async (req: Request<{id:string},{}, UpdateCategoryInput>, res: Response): Promise<void> => {
    try {
        await updateCategory(req.params.id, req.body);

        res.json({ message: 'Update Category' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const destroy = async (req: Request<{id:string}>, res: Response): Promise<void> => {
    try {
        await deleteCategory(req.params.id);
        res.json({ message: 'Delete Category' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




