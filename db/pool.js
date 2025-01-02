import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pkg;

export const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    database: process.env.DB_NAME || "inventory_management_app",
    password: process.env.DB_PASSWORD || "0077",
    port: process.env.DB_PORT || 5432,
});
