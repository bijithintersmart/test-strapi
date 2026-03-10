import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
  async find(ctx: any) {
    try {
      const { query } = ctx;
      
      const entries = await strapi.entityService.findMany('api::blog.blog', {
        ...query,
        populate: {
          coverImage: true,
        },
      });

      return {
        data: entries,
        meta: {
          pagination: {
            total: entries.length,
          },
        },
      };
    } catch (error: any) {
      console.error('Error fetching blog posts:', error);
      return ctx.internalServerError('Error fetching blog posts', { message: error.message });
    }
  },

  async findOne(ctx: any) {
    try {
      const { id } = ctx.params;
      
      const entry = await strapi.entityService.findOne('api::blog.blog', id, {
        populate: {
          coverImage: true,
        },
      });

      if (!entry) {
        return ctx.notFound('Blog post not found');
      }

      return {
        data: entry,
      };
    } catch (error: any) {
      console.error('Error fetching blog post:', error);
      return ctx.internalServerError('Error fetching blog post', { message: error.message });
    }
  },
}));
