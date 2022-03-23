import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";
import posts from './posts.js';

const URL_PREFIX = '/api/v1';
const routes = [
    {
        path: '/posts/:id',
        method: 'get',
        action: posts.getPost
    },
    {
        path: '/posts',
        method: 'get',
        action: posts.getPosts 
    },
    {
        path: '/posts/:id',
        method: 'delete',
        action: posts.deletePost 
    },
    {
        path: '/posts/:id',
        method: 'put',
        action: posts.editPost 
    },
    {
        path: '/posts',
        method: 'post',
        action: posts.createPost 
    }
];

const initRouter = routes => router => {
    const addRoute = (acc, { path, method, action }) => acc[method](R.concat(URL_PREFIX, path), action);
    const isValidRoute = ({ path = '', method = '', action = null }) => path.length && method.length && action.length;

    return R.compose(
        R.reduce(addRoute)(router),
        R.filter(isValidRoute)
    )(routes);
};

export default initRouter(routes);
