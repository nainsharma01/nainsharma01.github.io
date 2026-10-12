# 唐之宇 · 个人学术主页

参考 [attractor.do](https://attractor.do/) 风格（其又源自 [Jon Barron](https://jonbarron.info/)）的极简学术主页。
纯静态 `HTML / CSS / JS`，无任何构建依赖，改文件即生效。

线上地址：`https://你的GitHub用户名.github.io`（部署后替换）

## 目录结构

```
academic-homepage/
├── index.html                 # 页面与全部内容（基本信息已填好）
├── css/homepage.css           # 样式（配色等设计变量在 :root 中）
├── js/homepage.js             # 交互：复制邮箱、页脚年份等
├── templates/                 # 备用板块模板
│   ├── news.html              # News 动态列表（有新闻后复制回 index.html）
│   └── publications.html      # Publications 论文列表（有论文后复制回 index.html）
└── assets/
    ├── icons/favicon.svg      # 站点图标
    └── images/
        ├── portrait.svg       # 头像（占位，替换成照片）
        ├── portrait-alt.svg   # 悬停头像时切换的第二张图（占位）
        └── publications/      # 4 张论文 teaser 占位图（配合模板使用）
```

## 已完成 / 待完善

已按你提供的信息填好：

- [x] 姓名 Zhiyu Tang（唐之宇）、国防科技大学、导师黎铁军
- [x] 研究方向：物理引导的可控三维几何生成（Research 三段：Represent / Generate / Realize + 悬停引文）
- [x] 邮箱 tangzhiyu21@nudt.edu.cn（点击 Email 即复制）
- [x] Education：NUDT 在读（起始年份 2021 是按邮箱推测的，请核对）
- [x] GitHub 链接：https://github.com/tky520
- [x] 微信二维码：悬停/点击 WeChat 弹出（`assets/images/wechat-qr.png`）
- [x] 头像：已换成真实照片（`assets/images/portrait.jpg`，取景对准人脸）

还差这几步：

1. **CV / Scholar**：有后在 `index.html` 的 `profile-links` 区解开注释并填地址
2. **导师主页**：若黎老师有个人主页，把简介里 `<span>Prof. Tiejun Li ...` 换成 `<a>` 链接
3. **News / Publications**：目前整段未放入页面；有第一条新闻 / 论文时从 `templates/` 复制回
   `index.html`（Education 板块之前），按注释改内容即可

## 本地预览

任选其一：

```bash
npx serve academic-homepage          # Node
python -m http.server -d academic-homepage 8000   # Python
```

或直接双击 `index.html`。

## 部署（GitHub Pages 网页上传，零安装）

1. GitHub 新建仓库 `你的用户名.github.io`（Public）
2. 把本文件夹**里面的内容**（不是文件夹本身）拖进仓库 upload 页面，Commit
3. Settings → Pages → Branch 选 `main` / `/ (root)` → Save
4. 1–2 分钟后访问 `https://用户名.github.io`

以后更新：小改动直接在 GitHub 网页用铅笔 ✏️ 编辑 `index.html` 提交；
大改动本地改完预览，再拖文件覆盖提交，Pages 自动重新部署。

## 微调外观

`css/homepage.css` 顶部 `:root` 集中了设计变量：链接色 `--link-color`（默认 `#1772d0`）、
悬停色 `--link-hover`（默认 `#f09228`）、版心宽度 `--page-width`，改一处全站生效。

## 备注

- 已内置：无障碍（跳转链接、键盘焦点、aria）、移动端响应式、`prefers-reduced-motion`。
- 论文配图想用视频：在 `publication-media` 里放 `<video muted loop playsinline>`，悬停自动播放。
- 样式与结构借鉴自 attractor.do 与 Jon Barron 的主页，footer 已注明致谢，建议保留。
