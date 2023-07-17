const port = process.env.PORT || 3000;
const host = process.env.HOST || "http://localhost:" + port;

module.exports = {
    port,
    host,
    db: {
        host: process.env.DB_HOST || "localhost",
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
        database: process.env.DB_NAME || "app",
        dialect: process.env.DB_DIALECT || "mysql"
    },
    JWT: {
        RSA_PRIVAYE_KEY: process.env.RSA_PRIVAYE_KEY || "",
        RSA_PUBLIC_KEY: process.env.RSA_PUBLIC_KEY || "",
        JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
        JWT_ALGORITHM: process.env.JWT_ALGORITHM || "RS256",
    },
}
