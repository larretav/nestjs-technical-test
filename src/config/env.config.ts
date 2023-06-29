export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT,
  // bd mongo | postgres | mysql
  // Rest of env variables
})