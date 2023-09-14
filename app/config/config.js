module.exports = {
  NODE_ENV: "PRODUCTION",
  PORT: "8080",

  /** DATABASE */
  db: {
    DB_HOST: "127.0.0.1",
    DB_USER: "root",
    DB_PASS: "password",
    DB_NAME: "db_name",
    dialect: "mysql",

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },

  /** AUTH KEY */
  auth: {
    secret: "our-secret-key"
  }
};
