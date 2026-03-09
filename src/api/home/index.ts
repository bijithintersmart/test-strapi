// Home API index file
export default {
  controllers: {
    home: {
      index: require('./controllers/home').default.index,
    },
  },
  routes: require('./routes/home').default,
  services: {
    home: require('./services/home').default,
  },
};
