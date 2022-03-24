import { config } from "https://deno.land/x/dotenv/mod.ts";
const CONFIG = config();
const env = Deno.env.toObject();
const db_config = {
    host: CONFIG.db_host || env.db_host,
    username: CONFIG.db_user || env.db_user,
    password: CONFIG.db_psw || env.db_psw,
    database: CONFIG.db_name || env.db_name,
    port: CONFIG.db_port || env.db_port
};

export default db_config;
