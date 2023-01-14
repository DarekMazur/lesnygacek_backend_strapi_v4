module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "mel.db.elephantsql.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "ecvkagkx"),
      user: env("DATABASE_USERNAME", "ecvkagkx"),
      password: env("DATABASE_PASSWORD", "password"),
      ssl: env.bool("DATABASE_SSL", true),
    },
    pool: {
      min: 0,
      max: 5,
    },
  },
});
