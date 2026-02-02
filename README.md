# 秧歌星的狍子窝

東愛璃Lovely的非官方应援站

## 关于

本站为虚拟主播 **東愛璃Lovely**（昵称：狍子）的粉丝应援网站。

- **Bilibili**: https://space.bilibili.com/3821157
- **微博**: [即将上线]

## 技术栈

- 纯 HTML/CSS/JavaScript
- GitHub Pages 托管
- 响应式设计

## 配色方案

采用温暖的棕色系配色：
- 主背景色: #faf6f0 (米白暖色)
- 主题色: #c4a77d (奶茶色)
- 深色文字: #8b6f47 (深棕色)

## 部署

### GitHub Pages（推荐）

1. Fork 本仓库
2. 在 Settings > Pages 中启用 GitHub Pages
3. 选择 main 分支作为源

### 本地预览

```bash
# 使用 Python 简易服务器
python -m http.server 8000

# 或使用 Node.js
npx serve .
```

## 更新粉丝数

### 手动更新

编辑 `bilibili-stats.json` 文件：

```json
{
  "follower": 123456,
  "following": 100,
  "video_count": 500,
  "last_updated": "2026-02-02"
}
```

### 自动更新（可选）

可以使用 GitHub Actions 配合第三方 API 自动更新，参考 `.github/workflows/` 目录下的示例工作流文件。

## 待办事项

- [ ] 补充主播自我介绍文案
- [ ] 上传角色形象图片
- [ ] 撰写博客文章内容
- [ ] 配置微博链接
- [ ] 更新备案信息

## 许可

内容遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 协议。

## 致谢

模板基于原符瑶koritsu应援站修改，感谢原作者的开源贡献。
