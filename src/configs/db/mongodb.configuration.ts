export const MongoDBConfiguration = () => ({
  mongoDBConnectionString:
    process.env.NODE_ENV !== 'development'
      ? process.env.MONGODB_CONNECTION_STRING
      : 'mongodb://localhost:27017/nestjs-starter',
});
