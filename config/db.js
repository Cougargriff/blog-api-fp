import { config } from "https://deno.land/x/dotenv/mod.ts";
const CONFIG = config();
const env = Deno.env.toObject();
const db_config = {
    host: CONFIG.db_host || env.db_host,
    username: CONFIG.db_user || env.user,
    password: CONFIG.db_psw || env.db_psw,
    database: CONFIG.db_name || env.db_name,
    port: CONFIG.db_port || env.db_port
};

console.log(db_config);

export default db_config;
