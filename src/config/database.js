import config from '.'

const { dbUsername, dbPassword, dbName, dbHost, dbDialect, dbSchema } = config

module.exports = {
  dev: {
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: dbDialect,
    timezone: '+07:00',
    migrationStorageTableSchema: 'public',
    schema: dbSchema,
  },
}
