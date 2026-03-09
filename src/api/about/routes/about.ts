export default {
  routes: [
    {
      method: 'GET',
      path: '/about',
      handler: 'about.index',
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
