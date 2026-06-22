# GitHub Pages 部署说明

这是一个 React + Vite 项目，不是纯静态源码直发。GitHub Pages 发布目录由 GitHub Actions 自动构建生成，最终发布 `dist/`。

## 本地检查

```bash
npm install
npm run build
```

构建成功后，入口文件应位于：

```text
dist/index.html
```

构建后的 CSS 和 JS 路径应是相对路径，例如：

```html
<script type="module" crossorigin src="./assets/index-xxxx.js"></script>
<link rel="stylesheet" crossorigin href="./assets/index-xxxx.css">
```

## GitHub Pages 设置

1. 将项目推送到 GitHub 仓库的 `main` 分支。
2. 打开仓库的 `Settings -> Pages`。
3. 在 `Build and deployment` 中，将 `Source` 设置为 `GitHub Actions`。
4. 回到 `Actions` 页签，等待 `Deploy to GitHub Pages` 工作流完成。

如果你的默认分支不是 `main`，请修改 `.github/workflows/deploy.yml` 里的分支名。

## 访问地址

普通仓库：

```text
https://<GitHub用户名>.github.io/<仓库名>/
```

用户主页仓库，也就是仓库名为 `<GitHub用户名>.github.io`：

```text
https://<GitHub用户名>.github.io/
```
