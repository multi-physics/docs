import { defineConfig } from 'vitepress'
import mathjax3 from "markdown-it-mathjax3"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      link: '/',//默认语言使用根路径,
      // 覆盖 UI 翻译（必须在这里嵌套 themeConfig）
      themeConfig: {
        // 内置 UI 字符串翻译（重点修正部分）
        outline: {
          label: '本页目录'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '更改语言',
        skipToContentLabel: '跳至内容',
        search: {
          provider: 'local',
          options: {
            // 中文 translations（所有搜索 UI 字符串）
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '未找到结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车键',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '向上箭头',
                  navigateDownKeyAriaLabel: '向下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'ESC 键'
                }
              }
            }
          }
        }
      }
    },
    en: {
      label: "English",
      lang: "en-US",
      link: '/',//'/en' 暂时没有en版本，所以默认语言使用根路径
    },
  },
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
        content: '获取最新文档、教程、视频等快速入门Fidelics软件'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://fidelics.cn/images/logos/64x64.ico'
      }
    ],
    [
      'script',
      {
        src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js'
      }
    ],
    [
      'script',
      {
        src: 'https://fidelics.cn/js/wechatShare.js'
      }
    ],
    [
      'script',
      {},
      'const pageTitle = document.title;initWx(pageTitle, "获取最新文档、教程、视频等快速入门Fidelics软件", "https://fidelics.cn/images/logos/64x64.ico");'
    ],
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
      { text: '精选案例', link: '/coolCases/' },
      { text: '部署指南', link: '/install/' },
      { text: '产品功能', link: '/features/' },
      { text: '技术理论', link: '/theroy/' },
      { text: '开发者功能', link: '/sdks/' },
      { text: '案例中心', link: '/examples/' },
      { text: '成长历史', link: '/growup/' },
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
          link: '/theroy/',
          items: [
            {
              text: '连续力学理论',
              items: [
                { text: '欧拉框架', link: '/theroy/eulerFramework' },
                { text: '拉格朗日框架', link: '/theroy/lagrangFramework' },
                { text: '欧拉-拉格朗日框架', link: '/theroy/movingFrame' },
              ]
            },
            { text: '基础方程', link: '/theroy/fluidEqs' },
            {
              text: '湍流模型', link: '/theroy/turbulence',
              items: [
                {
                  text: '雷洛平均模型(RANS)', link: '/theroy/turbulence/RANS',
                  items: [
                    { text: 'Spalart-Allmaras模型', link: '/theroy/turbulence/RANS/SA' },
                    { text: 'K-Epsilon模型', link: '/theroy/turbulence/RANS/ke' },
                    { text: 'K-Omega模型', link: '/theroy/turbulence/RANS/komega' },
                    { text: 'SST模型', link: '/theroy/turbulence/RANS/SST' },
                    { text: '雷洛应力模型', link: '/theroy/turbulence/RANS/RSM' }
                  ]
                },
                { text: '大涡模拟(LES)', link: '/theroy/turbulence/LES' },
                { text: '直接数值模拟(DNS)', link: '/theroy/turbulence/DNS' }
              ]


            },
            { text: '边界条件', link: '/theroy/boundary/' },
            {
              text: '运动模型', link: '/theroy/motion/',
              items: [
                { text: '多参考系(MRF)', link: '/theroy/motion/MRF' },
                { text: '动网格(Dym)', link: '/theroy/motion/dynamicMesh' },
                { text: '嵌套网格(OverSet)', link: '/theroy/motion/overset' }
              ]
            },
            { text: '非稳态', link: '/theroy/unsteady' },
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
              link: '/theroy/multiPhase/',
              items: [
                { text: 'VOF', link: '/theroy/multiPhase/VOF' },
                { text: '欧拉-欧拉', link: '/theroy/multiPhase/euler-euler' },
                {
                  text: '相变',
                  link: '/theroy/multiPhase/phaseChange/',
                  items: [
                    { text: '蒸发', link: '/theroy/multiPhase/phaseChange/evaporation' },
                    { text: '冷凝', link: '/theroy/multiPhase/phaseChange/condensation' },
                    { text: '融化', link: '/theroy/multiPhase/phaseChange/melting' },
                    { text: '凝固', link: '/theroy/multiPhase/phaseChange/solidification' },
                  ]
                },
              ]
            },

            { text: '多孔介质', link: '/theroy/多孔介质' },
            { text: '热辐射', link: '/theroy/热辐射' },
            { text: '化学反应', link: '/theroy/reactions' }
          ]
        }
      ],
      '/examples/VVExamples': [
        {
          text: 'V&V 验证',
          link: '/examples/VVExamples/',
          items: [
            {
              text: '基准案例',
              items: [
                {
                  text: '边界层', link: '/examples/VVExamples/boundaryLayer'
                },
                {
                  text: '管流', link: '/examples/VVExamples/pipeFlow'
                },
                { text: '分离流', link: '/examples/VVExamples/cylinderFlow' },
                { text: '非稳态流', link: '/examples/VVExamples/unsteadyCylinderFlow' }
              ]
            },
            {
              text: '场景案例',
              items: [
                { text: '翼型外流场', link: '/examples/VVExamples/NACA0012' },
                { text: '汽车外流场', link: '/examples/VVExamples/carExternalFlow' },
                { text: '跨音速叶珊', link: '/examples/VVExamples/casecade1055' },
                { text: '核燃料组件', link: '/examples/VVExamples/nuclearRod' },
              ]
            },
            {
              text: '多物理场耦合案例',
              items: [
                { text: '圆柱强迫振荡', link: '/examples/VVExamples/cylinderFSI' },
                { text: '欧拉-圆柱自激振荡', link: '/examples/VVExamples/cylinderFSI' },
                { text: '圆柱-梁自激振荡', link: '/examples/VVExamples/cylinderFSI' },
                { text: '共轭传热', link: '/examples/VVExamples/CHTFlow' },
                { text: '汽车后视镜声学', link: '/examples/VVExamples/mirrorAeroacoustics' }
              ]
            }
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
  },
  vite: {
    plugins: [
      {// define rules to ingore building of internal files.
        name: "ignore-internal-md",
        enforce: 'pre',
        load(id) {
          if (process.env.NODE_ENV == "production") {
            if (id.endsWith('.md')) {

              const file = id.split('/').pop()
              if (file?.startsWith('internal_')) {

                return ['# ⛔ 权限不足',
                  '该栏目属于内部信息，欲知详情，请用权限用户登录。'].join('\n');
              }
            }
          }
          return null;
        }
      }
    ]
  }
})



