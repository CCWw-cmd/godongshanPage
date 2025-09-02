import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "东山岛六人行",
  description: "关于东山岛的一些攻略",
  base: "/godongshanPage/",
  appearance: "dark",
  head: [
    ['link', { rel: 'icon', href: '/godongshanPage/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "路线 ", link: "/path" },
      { text: "美食 ", link: "/food" },
    ],

    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    //手机端深浅模式文字修改 //
    darkModeSwitchLabel: '深浅模式',
    sidebar: [
      {
        text: "攻略 ",
        items: [
          { text: "路线 ", link: "/path" },
          { text: "美食 ", link: "/food" },
        ],
      },
    ],
    outline: {
      level: [2, 4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: "目录", // 文字显示
    },
    //上次更新时间 //
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // 可选值full、long、medium、short
        timeStyle: "medium", // 可选值full、long、medium、short
      },
    },
    // 添加社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ccww-cmd/godongshan' }
    ],
    // 添加页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright  2024 东山岛六人行'
    },
    // 添加搜索
    search: {
      provider: 'local'
    }
  },
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    // 添加代码块行号
    lineNumbers: true
  },
  // 添加构建配置
  build: {
    outDir: '.vitepress/dist',
    assetsDir: 'assets'
  }
})
