/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';
import { allPosts, createPost, deletePost, findPostById, updatePost } from '../services/postService';
import { CreatePostInput, UpdatePostInput } from '../validation/postValidation';

export const all = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await allPosts();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const create = async (req: Request<{},{}, CreatePostInput>, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        
       const category= await createPost(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const find=async(req: Request<{id:string}>, res: Response): Promise<void> => {
    try {
        const data=await findPostById(req.params.id);
        res.json(data);
    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const update = async (req: Request<{id:string},{}, UpdatePostInput>, res: Response): Promise<void> => {
    try {
        await updatePost(req.params.id, req.body);

        res.json({ message: 'Update Category' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const destroy = async (req: Request<{id:string}>, res: Response): Promise<void> => {
    try {
        await deletePost(req.params.id);
        res.json({ message: 'Delete Category' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




