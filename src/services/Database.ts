const sql = require('mssql');
import DatabaseConfig from "../models/DatabaseConfig";
require('dotenv').config()

class Database {
    config: DatabaseConfig;

    constructor(config?: DatabaseConfig) {
        if (config) this.config = config;
        else this.config = {
            server: process.env.DB_HOST!,
            port: process.env.DB_PORT!, 
            user: process.env.DB_USER!, 
            password: process.env.DB_PASSWORD!, 
            database: process.env.DB_NAME!,
            options: {
                trustServerCertificate: true,        
            },
        }
    };

    connect(): any {
        return sql.connect(this.config);
    };

    async query(query: string): Promise<any> {
        try {
            const result = await sql.query(query);
            return result.recordset;
        } catch (error) {
            throw new Error(error);
        }finally{
            await sql.close();
        }
    }
}

export default Database;