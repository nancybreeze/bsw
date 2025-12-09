# 部署到 GitHub Pages 指南

## 步骤一：准备 GitHub 仓库

1. 在 GitHub 上创建一个名为 `bsw` 的新仓库（Repository）
2. 将本地项目推送到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/bsw.git
git push -u origin main
```

## 步骤二：配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 `Settings`（设置）
3. 在左侧菜单中找到 `Pages`
4. 在 `Source` 部分，选择 `GitHub Actions`

## 步骤三：自动部署

当你推送代码到 `main` 分支时，GitHub Actions 会自动：
1. 安装依赖
2. 构建项目
3. 部署到 GitHub Pages

部署完成后，你的网站将在以下地址访问：
```
https://你的用户名.github.io/bsw/
```

## 注意事项

1. 项目已经配置好了正确的 base 路径 (`/bsw/`)

2. 如果想使用自定义域名，在仓库的 `Settings > Pages` 中配置 Custom domain

3. 首次部署可能需要几分钟时间

## 本地预览构建结果

```bash
npm run build
npm run preview
```

## 更新网站

只需推送新的更改到 main 分支：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新部署你的网站。
