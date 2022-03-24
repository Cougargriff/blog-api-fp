import { config } from "https://deno.land/x/dotenv/mod.ts";
const CONFIG = config();
const db_config = {
    host: CONFIG.db_host || Deno.env.db_host,
    username: CONFIG.db_user || Deno.env.user,
    password: CONFIG.db_psw || Deno.env.db_psw,
    database: CONFIG.db_name || Deno.env.db_name,
    port: CONFIG.db_port || Deno.env.db_post
};

console.log(db_config);

export default db_config;
