# Tailwind CSS 使用指南（Fidelics 官网专用）

> **原子类 CSS 框架** —— 不用写 `.btn {}`，直接用 `class="bg-blue-500 hover:bg-blue-700"`  

---

## 方法一：CDN 引入（最快，适合快速原型）

```html
<!DOCTYPE html>
<html>
<head>
  <!-- 1. 引入 Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- 2. 直接使用 Tailwind 类 -->
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    按钮
  </button>
</body>
</html>
```

优点：0 配置，复制粘贴即用
缺点：文件大（~3MB），生产环境不推荐

## 方法二：本地安装 + 构建（推荐，生产环境）

步骤 1：确认 Node.js 环境

    下载安装window版本，[text](https://nodejs.org/en/download)
    打开node.js commad :
    node -v  # 应显示 v16+
    npm -v

步骤 2：初始化项目

    cd /to/web/path
    npm install tailwindcss @tailwindcss/cli

步骤 3：创建输入 CSS 文件(创建./css/input.css文件并输入如下内容)

    @import "tailwindcss";

步骤 5：构建压缩 CSS (bash)

    npx @tailwindcss/cli -i ./css/input.css -o ./css/tailwind.css --watch

步骤 6：HTML 中引入html

    <link href="/css/tailwind.css" rel="stylesheet">

优点：体积小（< 100KB）、可定制、生产必备
体积对比：CDN 3MB → 本地构建 < 100KB

