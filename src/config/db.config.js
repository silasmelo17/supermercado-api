
module.exports = {
    development: {
        host: process.env.DEV_HOST,
        port: process.env.DEV_DB_PORT,
        database: process.env.DEV_DATABASE,
        username: process.env.DEV_USERNAME,
        password: process.env.DEV_PASSWORD,
        dialect: process.env.DEV_DIALECT
    },
    product: {
        host: process.env.HOST,
        port: process.env.DB_PORT,
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        dialect: process.env.DIALECT
    }
}
