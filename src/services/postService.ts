import { Post } from "@prisma/client";
import prisma from "../config/db";
import { CreatePostInput, createPostSchema, UpdatePostInput } from "../validation/postValidation";

// all posts
export const allPosts=async():Promise<Post[]>=>{
    try {
        return await prisma.post.findMany();
    } catch (error) {
       throw new Error(error);
    }
}

// create post
export const createPost=async(data:CreatePostInput):Promise<Post>=>{
    const parsedData = createPostSchema.parse(data);
    try {
        const postData = {
            title: parsedData.title,
            accession_number: parsedData.accession_number,
            authorId: parsedData.authorId,
            categoryId: parsedData.categoryId,
            content: parsedData.content ?? null,
            image_url: parsedData.image_url ?? null,
            published: parsedData.published ?? false,
            publish_date: parsedData.publish_date ?? null,
        };

        return await prisma.post.create({ data: postData });
    } catch (error) {
        throw new Error(error);
    }
}

//find post by id
export const findPostById=async(id:string):Promise<Post>=>{
    try {
        return await prisma.post.findUnique({ where: { id } });
    } catch (error) {
        throw new Error(error);
    }
}

// update post
export const updatePost=async(id:string,data:UpdatePostInput):Promise<Post>=>{
    try {
        return await prisma.post.update({ where: { id }, data });
    } catch (error) {
        throw new Error(error);
    }
}


export const deletePost=async(id:string):Promise<Post>=>{
    try {
        return await prisma.post.delete({ where: { id } });
    } catch (error) {
        throw new Error(error);
    }
}