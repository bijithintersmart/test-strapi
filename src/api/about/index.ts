// About API index file
export default {
  controllers: {
    about: {
      index: require('./controllers/about').default.index,
    },
  },
  routes: require('./routes/about').default,
  services: {
    about: require('./services/about').default,
  },
};
