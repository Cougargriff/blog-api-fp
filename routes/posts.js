import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";
import Post from '../models/posts.js';


const getPost = async ({ params: { id = null }, ...req }) => {
    const post = await Post.where('id', id).all();
    if (!post.length) {
        return req.json('No post found for id ' + id, 404); 
    }
    return post[0];
};

const getPosts = async (req) => {
    return await Post.all();
};

const deletePost = async (req) => {
    return await Post.where('id', id).delete();
};

const editPost = async (req) => {
    return "In Progress";
};

const createPost = async ({ body, ...req}) => {
    const {title = '', content = ''} = await body;
    return await Post.create({title, content});
};

const posts = {
    getPost,
    getPosts,
    deletePost,
    editPost,
    createPost
};

export default posts;
