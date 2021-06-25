declare interface DatabaseConfig {
    server: string
    port?: number | string
    user: string
    password: string
    database: string
    options?: Object
}

export default DatabaseConfig;