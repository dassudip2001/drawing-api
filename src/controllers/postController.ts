/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import {
  allPosts,
  createPost,
  deletePost,
  findPostById,
  updatePost,
} from "../services/postService";
import { CreatePostInput, UpdatePostInput } from "../validation/postValidation";

export const all = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await allPosts();
    res.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
  }
};

export const create = async (
  req: Request<{}, {}, CreatePostInput>,
  res: Response
): Promise<void> => {
  try {
    console.log(req.body);

    const category = await createPost(req.body);
    res.status(201).json(category);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
  }
};

export const find = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const data = await findPostById(req.params.id);
    res.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
  }
};

export const update = async (
  req: Request<{ id: string }, {}, UpdatePostInput>,
  res: Response
): Promise<void> => {
  try {
    await updatePost(req.params.id, req.body);

    res.json({ message: "Update Category" });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
  }
};

export const destroy = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    await deletePost(req.params.id);
    res.json({ message: "Delete Category" });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
  }
};
