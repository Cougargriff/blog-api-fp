import { abcCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";
import logger from '../lib/logger.js';

const logRequest = (next) => (req) => {
    logger.incoming(req);
    return next (req); 
};


const applyMiddleware = R.invoker(1, 'use');
const useMiddleware = R.compose(
    applyMiddleware(logRequest),
    applyMiddleware(abcCors())
);

export default useMiddleware;
