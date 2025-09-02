# 东山岛六人行 

一个基于 VitePress 构建的东山岛旅游攻略网站。

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为部署源
4. 工作流会自动构建并部署到 GitHub Pages

## 项目结构

- `index.md` - 主页
- `path.md` - 路线攻略
- `food.md` - 美食推荐
- `tips.md` - 旅行贴士
- `.vitepress/config.mts` - VitePress 配置
- `public/` - 静态资源

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [pnpm](https://pnpm.io/) - 包管理器
