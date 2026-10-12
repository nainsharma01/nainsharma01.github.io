# 个人学术主页（Academic Homepage）

一个参考 [attractor.do](https://attractor.do/) 风格（其又源自 [Jon Barron](https://jonbarron.info/)）的极简学术主页模板。
纯静态 `HTML / CSS / JS`，无任何构建依赖，改文件即生效。

## 目录结构

```
academic-homepage/
├── index.html                      # 页面结构与全部内容（主要改这个）
├── css/homepage.css                # 样式（配色等设计变量在 :root 中）
├── js/homepage.js                  # 交互：复制邮箱、微信二维码弹层、年份
└── assets/
    ├── icons/favicon.svg           # 站点图标
    └── images/
        ├── portrait.svg            # 头像（占位，替换成你的照片）
        ├── portrait-alt.svg        # 悬停头像时切换的第二张图（占位）
        ├── wechat-qr.svg           # 微信二维码（占位）
        └── publications/           # 4 张论文 teaser 占位图
```

## 把示例内容换成你的信息

页面里所有人物、院校、论文都是**示例数据**，按下面顺序替换即可（`index.html` 中对应位置都有中文注释标记）：

1. **姓名**：`<h1 id="profile-name">` 与旁边的 `<span class="profile-name-zh">`（中文名）。
2. **简介**：`class="profile-introduction"` 里的两段话（学校、导师、研究方向），加粗词用 `<span class="profile-introduction__highlight">`。
3. **邮箱**：`data-email="ming.chen@example.com"` 和 Email 弹层文本 `junhaohou…` 同款位置，两处都改成你的邮箱。
4. **链接行**：CV / Scholar / GitHub 的 `href="#"` 换成真实链接；不需要的（如 WeChat）整段删掉。
5. **头像**：把自己的照片放到 `assets/images/`，替换 `portrait.svg` 的 `src` 引用（建议竖版 600×800，脸部居中，会被裁成圆形）。`portrait-alt.svg` 是悬停显示的第二张图，不想要可以删掉那个 `<img>`。
6. **微信二维码**：替换 `assets/images/wechat-qr.svg` 为你的真实二维码图片并更新引用。
7. **Research 板块**：愿景段落 + 三个方向（示例为 Perceive / Reason / Act），每段右侧 `<blockquote>` 是悬停时浮现的古文引文，换成你喜欢的句子。
8. **News / Education**：紧凑列表，`<li><span>内容</span><span>时间</span></li>` 一行一条。
9. **Publications**：每篇论文一个 `<article class="publication">`，复制一份改字段即可：
   - 配图：替换 `assets/images/publications/xxx.svg`（建议 640×640 方图）；
   - 标记：`*` 共同一作、`†` 通讯、`⚑` 项目负责人，写在作者 `<sup>` 里；
   - 链接行：`paper / arXiv / code` 等按需增删；GitHub star 徽章把 shields.io 链接里的 `yourname/ReasonGraph` 改成真实仓库（没有就删掉那个 `<span class="publication-stars">`）。
10. **可选板块**：文件末尾注释里备好了 `Academic Services / Talks / Awards` 模板，解开注释填内容即可。

## 本地预览

任选其一：

```bash
# Node
npx serve academic-homepage

# Python
python -m http.server -d academic-homepage 8000
```

然后访问 http://localhost:8000 （直接双击 `index.html` 也能看，交互不受影响）。

## 部署（免费）

- **GitHub Pages**：把文件夹推到一个仓库（如 `username.github.io`），在 Settings → Pages 里选择主分支即可。
- **Vercel / Netlify**：导入仓库或直接拖拽文件夹，零配置。

## 微调外观

`css/homepage.css` 顶部的 `:root` 集中了全部设计变量：主链接色 `--link-color`（默认 `#1772d0`）、悬停色 `--link-hover`（默认 `#f09228`）、版心宽度 `--page-width` 等，改一处全站生效。

## 备注

- 页面已内置：无障碍（跳转链接、键盘焦点、`aria` 标签）、移动端响应式、`prefers-reduced-motion` 支持。
- 论文配图若想用视频：在 `publication-media` 里放 `<video muted loop playsinline>`，悬停会自动播放（`js/homepage.js` 已支持）。
- 样式与结构借鉴自 attractor.do 与 Jon Barron 的主页，footer 已注明来源；上线前建议保留致谢。
