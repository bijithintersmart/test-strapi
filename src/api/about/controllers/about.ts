// @ts-nocheck
export default {
  async index(ctx) {
    try {
      const strapiInstance = global.strapi;
      
      if (!strapiInstance) {
        throw new Error('Strapi instance not found');
      }

      // Fetch all about content types
      const [infos, teams, histories, stats] = await Promise.all([
        // About Info - main content
        strapiInstance.entityService.findMany('api::about-info.about-info', {
          filters: { isActive: true },
          sort: ['order:asc'],
          populate: ['heroImage', 'gallery'],
        }),
        // About Team - team members
        strapiInstance.entityService.findMany('api::about-team.about-team', {
          filters: { isActive: true },
          sort: ['order:asc'],
          populate: ['photo'],
        }),
        // About History - timeline
        strapiInstance.entityService.findMany('api::about-history-timeline.about-history-timeline', {
          filters: { isActive: true },
          sort: ['year:asc'],
          populate: ['image'],
        }),
        // About Stats - statistics
        strapiInstance.entityService.findMany('api::about-stat.about-stat', {
          filters: { isActive: true },
          sort: ['order:asc'],
        }),
      ]);

      return {
        data: {
          infos: infos || [],
          teams: teams || [],
          histories: histories || [],
          stats: stats || [],
        },
        meta: {
          infosCount: Array.isArray(infos) ? infos.length : 0,
          teamsCount: Array.isArray(teams) ? teams.length : 0,
          historiesCount: Array.isArray(histories) ? histories.length : 0,
          statsCount: Array.isArray(stats) ? stats.length : 0,
        },
      };
    } catch (error) {
      console.error('Error fetching about content:', error);
      return ctx.internalServerError('Error fetching about content', { message: error.message });
    }
  },
};
