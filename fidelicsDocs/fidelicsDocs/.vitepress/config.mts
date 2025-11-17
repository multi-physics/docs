import { defineConfig } from 'vitepress'
import mathjax3 from "markdown-it-mathjax3"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Fidelics",//Fidelics Help
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logos/64x64.ico'
      }
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Fidelics用户中心'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Fidelics多物理场仿真平台，赋能高端装备与新质生产力。'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://fidelics.cn/images/logos/64x64.ico'
      }
    ]
  ],
  description: "Documentation, tutorials, and videos for Fidelics Products",//Documentation, tutorials, and videos for Fidelics Products
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logos/64x64.ico',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '部署指南', link: '/install' },
      { text: '产品功能', link: '/features' },
      { text: '技术理论', link: '/theroy' },
      { text: '开发者功能', link: '/sdks' },
      { text: '案例中心', link: '/tutorials' },
    ],
    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    sidebar:
    {
      '/install/': [
        {
          text: '部署指南',
          items: [
            { text: 'Linux', link: '/install' },
            { text: 'Windows', link: '/install' }
          ]
        }
      ],
      '/theroy/': [
        {
          text: '技术理论',
          items: [
            {
              text: '计算框架',
              items: [
                { text: '欧拉框架', link: '/theroy/eulerFramework' },
                { text: '拉格朗日框架', link: '/theroy/lagrangFramework' }
              ]
            },
            { text: '基础方程', link: '/theroy/fluidEqs' },
            { text: '湍流模型', link: '/theroy/turbulence' },
            { text: '运动模型', link: '/theroy/movingframe' },
            { text: '边界条件', link: '/theroy/boundary' },
            { text: '多组分流', link: '/theroy/species' },
            {
              text: '声学',
              items: [
                { text: '广谱噪音', link: '/theroy/acoustics_广谱噪音' },
                { text: '线性声学', link: '/theroy/acoustics_线性声学' },
                { text: '直接模拟', link: '/theroy/acoustics_直接模拟' },
              ]
            },
            {
              text: '多相流',
              items: [
                { text: 'VOF', link: '/theroy/VOF' },
                { text: '欧拉-欧拉', link: '/theroy/euler-euler' },
              ]
            },
            { text: '多孔介质', link: '/theroy/多孔介质' },
            { text: '热辐射', link: '/theroy/热辐射' },
            { text: '化学反应', link: '/theroy/reactions' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: '' },
      {
        icon: {
          svg: '<img src="/images/logos_media/wechat.svg" style="width:20px;height:20px" />'
        },
        link: ''
      },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<img src="/images/logos_media/zhihu.ico" style="width:20px;height:20px" />'
        },
        link: ''
      }
    ],

    footer: {
      message: '高保真、富有洞察力、用户导向的现代多物理建模仿真平台',
      copyright: '© 2021-2025 Fidelics Technology. All rights reserved.'
    }
  },
  markdown: {
    math: true,
    config: (md) => { md.use(mathjax3) }
  }
})



