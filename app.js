import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";

import logger from './lib/logger.js';
import initRouter from './routes/routes.js';
import useMiddleware from './routes/middleware.js';
import db from './lib/db.js';

await db.sync();

const app = new Application();
const CONFIG = {
    port: Number(config().port)
};

const start = R.invoker(1, 'start')(CONFIG);
const startServer = R.compose(
    start,
    useMiddleware,
    initRouter
);

logger.log(`Listening on port ${CONFIG.port}`);
startServer(app);
