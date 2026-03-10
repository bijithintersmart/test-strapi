export default {
  routes: [
    {
      method: 'GET',
      path: '/blog',
      handler: 'blog.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/blog/:id',
      handler: 'blog.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
