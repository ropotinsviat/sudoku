const authConfig = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION || '3600s',
};

export default authConfig;
