module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'vueexpresstest',
        user: process.env.DB_USER || 'vueexpresstest',
        password: process.env.DB_PASS || 'vueexpresstest',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './vueexpresstest.sqlite'
        }
    }
}
