import type { StrapiAdmin } from '@strapi/strapi';

export default {
  menu: (menu: StrapiAdmin.MenuSection[]) => {
    // Add Home section with all home content types
    const homeSection: StrapiAdmin.MenuSection = {
      name: 'Home Management',
      intlLabel: {
        id: 'home.menu.section',
        defaultMessage: 'Home Management',
      },
      links: [
        {
          name: 'Home Carousel',
          to: 'content-manager/collection-types/api::home-carousel.home-carousel',
          icon: 'carousel',
          intlLabel: {
            id: 'home-carousel.menu',
            defaultMessage: 'Home Carousel',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::home-carousel.home-carousel',
            },
          ],
        },
        {
          name: 'Home Text Sections',
          to: 'content-manager/collection-types/api::home-text.home-text',
          icon: 'text',
          intlLabel: {
            id: 'home-text.menu',
            defaultMessage: 'Text Sections',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::home-text.home-text',
            },
          ],
        },
        {
          name: 'Home Product Listings',
          to: 'content-manager/collection-types/api::home-product-listing.home-product-listing',
          icon: 'shopping-bag',
          intlLabel: {
            id: 'home-product-listing.menu',
            defaultMessage: 'Product Listings',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::home-product-listing.home-product-listing',
            },
          ],
        },
        {
          name: 'Home Content Blocks',
          to: 'content-manager/collection-types/api::home-content.home-content',
          icon: 'layout',
          intlLabel: {
            id: 'home-content.menu',
            defaultMessage: 'Content Blocks',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::home-content.home-content',
            },
          ],
        },
        {
          name: 'Home Videos',
          to: 'content-manager/collection-types/api::home-video.home-video',
          icon: 'play',
          intlLabel: {
            id: 'home-video.menu',
            defaultMessage: 'Videos',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::home-video.home-video',
            },
          ],
        },
      ],
    };

    // Add About section with all about content types
    const aboutSection: StrapiAdmin.MenuSection = {
      name: 'About Management',
      intlLabel: {
        id: 'about.menu.section',
        defaultMessage: 'About Management',
      },
      links: [
        {
          name: 'About Info',
          to: 'content-manager/collection-types/api::about-info.about-info',
          icon: 'information',
          intlLabel: {
            id: 'about-info.menu',
            defaultMessage: 'About Info',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::about-info.about-info',
            },
          ],
        },
        {
          name: 'Team Members',
          to: 'content-manager/collection-types/api::about-team.about-team',
          icon: 'user',
          intlLabel: {
            id: 'about-team.menu',
            defaultMessage: 'Team Members',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::about-team.about-team',
            },
          ],
        },
        {
          name: 'History Timeline',
          to: 'content-manager/collection-types/api::about-history-timeline.about-history-timeline',
          icon: 'clock',
          intlLabel: {
            id: 'about-history.menu',
            defaultMessage: 'History Timeline',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::about-history-timeline.about-history-timeline',
            },
          ],
        },
        {
          name: 'Statistics',
          to: 'content-manager/collection-types/api::about-stat.about-stat',
          icon: 'chart',
          intlLabel: {
            id: 'about-stats.menu',
            defaultMessage: 'Statistics',
          },
          permissions: [
            {
              action: 'plugin::content-manager.explorer.read',
              subject: 'api::about-stat.about-stat',
            },
          ],
        },
      ],
    };

    return [...menu, homeSection, aboutSection];
  },
} satisfies StrapiAdmin.AdminConfig;
