module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        GATrackingId: `UA-148148901-3`,
      },
    },
  ],
  siteMetadata: {
    title: 'G',
    description: 'A powerful rendering engine for AntV providing canvas and svg draw',
    siteUrl: 'https://g.antv.vision',
    githubUrl: 'https://github.com/antvis/g',
    navs: [
      {
        slug: 'docs/guide',
        title: {
          zh: '使用文档',
          en: 'Guide',
        },
      },
      {
        slug: 'docs/api',
        title: {
          zh: 'API 文档',
          en: 'API',
        },
      },
      {
        slug: 'examples',
        title: {
          zh: '示例',
          en: 'Examples',
        },
      },
    ],
    docs: [
      {
        slug: 'guide/render',
        title: {
          zh: '渲染',
          en: 'Render',
        },
        order: 2,
      },
      {
        slug: 'guide/hit',
        title: {
          zh: '拾取',
          en: 'Hit',
        },
        order: 3,
      },
      {
        slug: 'guide/event',
        title: {
          zh: '事件',
          en: 'Event',
        },
        order: 4,
      },
      {
        slug: 'guide/animation',
        title: {
          zh: '动画',
          en: 'Animation',
        },
        order: 5,
      },
      // API
      {
        slug: 'api/canvas',
        title: {
          zh: 'Canavs 画布',
          en: 'Canavs',
        },
        order: 2,
      },
      {
        slug: 'api/group',
        title: {
          zh: 'Group 图形分组',
          en: 'Group',
        },
        order: 3,
      },
      {
        slug: 'api/shape',
        title: {
          zh: 'Shape 图形',
          en: 'Shape',
        },
        order: 4,
      },
    ],
    examples: [
      {
        slug: 'shape',
        title: {
          zh: '基本图形',
          en: 'Shape',
        },
      },
      {
        slug: 'event',
        title: {
          zh: '事件',
          en: 'Event',
        },
      },
      {
        slug: 'animation',
        title: {
          zh: '动画',
          en: 'Animation',
        },
      },
    ],
  },
};
