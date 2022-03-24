import { config } from "https://deno.land/x/dotenv/mod.ts";
const CONFIG = config();
const db_config = {
    host: CONFIG.db_host,
    username: CONFIG.db_user,
    password: CONFIG.db_psw,
    database: CONFIG.db_name,
    port: CONFIG.db_port
};

export default db_config;
