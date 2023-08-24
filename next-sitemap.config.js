module.exports = {
  siteUrl: 'https://giovankov.com/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
