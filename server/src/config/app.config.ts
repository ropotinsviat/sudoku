const appConfig = {
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL,
  cors: {
    origin: process.env.CLIENT_URL,
    methods: 'GET,PUT,POST,DELETE',
    exposedHeaders: ['Authorization'],
    credentials: true,
  },
};

export default appConfig;
