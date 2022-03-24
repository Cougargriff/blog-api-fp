import { Database, PostgresConnector } from 'https://deno.land/x/denodb@v1.0.40/mod.ts';
import db_config from '../config/db.js';
import Post from '../models/posts.js';

const models = [ Post ];
const connection = new PostgresConnector(db_config);
const db = new Database(connection);

db.link(models);

export default db;
