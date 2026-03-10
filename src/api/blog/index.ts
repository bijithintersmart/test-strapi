// Blog API index file
export default {
  contentTypes: require('./content-types/blog/schema.json'),
  controllers: {
    blog: require('./controllers/blog').default,
  },
  routes: require('./routes/blog').default,
  services: require('./services/blog').default,
};
