// @ts-nocheck
export default {
  async index(ctx) {
    try {
      // In Strapi 5, use the global strapi singleton
      const strapiInstance = global.strapi;
      
      if (!strapiInstance) {
        throw new Error('Strapi instance not found');
      }

      // Fetch all home content types
      const [carousels, texts, products, contents, videos] = await Promise.all([
        // Home Carousel - active items ordered by order
        strapiInstance.entityService.findMany('api::home-carousel.home-carousel', {
          filters: { isActive: true },
          sort: ['order:asc'],
          populate: ['image'],
        }),
        // Home Text Sections - active items ordered by order
        strapiInstance.entityService.findMany('api::home-text.home-text', {
          filters: { isActive: true },
          sort: ['order:asc'],
          populate: ['image'],
        }),
        // Home Product Listings - active items ordered by order
        strapiInstance.entityService.findMany('api::home-product-listing.home-product-listing', {
          filters: { isActive: true },
          sort: ['order:asc'],
          populate: ['images', 'featuredImage'],
        }),
        // Home Content Blocks - active items ordered by order
        strapiInstance.entityService.findMany('api::home-content.home-content', {
          filters: { isActive: true },
          sort: ['order:asc'],
          populate: ['media'],
        }),
        // Home Videos - active items ordered by order
        strapiInstance.entityService.findMany('api::home-video.home-video', {
          filters: { isActive: true },
          sort: ['order:asc'],
          populate: ['videoFile', 'thumbnail'],
        }),
      ]);

      return {
        data: {
          carousels: carousels || [],
          texts: texts || [],
          products: products || [],
          contents: contents || [],
          videos: videos || [],
        },
        meta: {
          carouselsCount: Array.isArray(carousels) ? carousels.length : 0,
          textsCount: Array.isArray(texts) ? texts.length : 0,
          productsCount: Array.isArray(products) ? products.length : 0,
          contentsCount: Array.isArray(contents) ? contents.length : 0,
          videosCount: Array.isArray(videos) ? videos.length : 0,
        },
      };
    } catch (error) {
      console.error('Error fetching home content:', error);
      return ctx.internalServerError('Error fetching home content', { message: error.message });
    }
  },
};
