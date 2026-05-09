# 霍格沃茨模拟器

一个同人向、非商业的霍格沃茨生活模拟器。玩家可以创建自己的巫师角色，选择出身、学院和魔杖，在课程、探索、任务、商店、人物关系、魔药、决斗等系统中体验校园生活。

> 本项目为粉丝创作的网页小游戏，仅供娱乐，不代表官方立场。

## 在线体验

- 访问地址：[https://www.hwsim.top](https://www.hwsim.top)
- GitHub Issues：[提交问题或建议](https://github.com/citrus02/hwsim/issues)

## 功能特色

- 角色创建：支持姓名、出身、学院、魔杖等自定义内容
- 分院与魔杖：包含分院帽测试、随机姓名、魔杖抽取与试用
- 课程系统：覆盖变形术、魔咒课、草药课、黑魔法防御术、魔法史、天文学、魔药课、麻瓜研究等课程
- 日程与行动：按时间推进校园生活，管理每日行动次数
- 探索与事件：触发随机事件、剧情事件和 NPC 互动
- 人物关系：与角色建立关系、赠送礼物、提升好感
- 任务系统：包含任务数据、任务引擎和任务界面
- 决斗系统：支持法术数据、决斗逻辑和战斗界面
- 商店系统：包含对角巷、霍格莫德、翻倒巷等地点
- 背包与货币：支持物品、金币、银西可、铜纳特等资源管理
- 存档系统：使用浏览器本地存储保存游戏进度
- PWA 支持：可在移动端以类似应用的方式打开

## 技术栈

本项目是纯前端静态网页项目，不需要安装依赖或构建工具。

- HTML
- CSS
- JavaScript ES Modules
- LocalStorage
- Web App Manifest / PWA

## 本地运行

由于项目使用了 JavaScript 模块，建议通过本地静态服务器打开，而不是直接双击 `index.html`。

如果你已经安装了 Python：

```bash
python -m http.server 8000
```

然后在浏览器访问：

```text
http://localhost:8000
```

也可以使用 VS Code 的 Live Server 插件，或任意静态网站服务器。

## 项目结构

```text
.
├── index.html                 # 游戏入口页面
├── style.css                  # 主界面样式
├── manifest.json              # PWA 配置
├── audio/                     # 音频资源
├── course/                    # 课程、课堂、题库与日程系统
│   ├── subjects/              # 魔法课程模块
│   └── muggle-academic/       # 麻瓜课程模块
├── diagon-alley/              # 对角巷商店
├── hogsmeade/                 # 霍格莫德商店与界面
├── knockturn-alley/           # 翻倒巷商店
├── *-data.js                  # 游戏数据
├── *-system.js                # 系统逻辑
└── *-ui.js                    # 界面渲染逻辑
```

## 部署到 GitHub Pages

项目已经是静态网页结构，可以直接部署到 GitHub Pages。

1. 将代码推送到 GitHub 仓库。
2. 进入仓库的 `Settings`。
3. 打开 `Pages`。
4. Source 选择部署分支，例如 `main`。
5. 目录选择 `/root`。
6. 保存后等待 GitHub Pages 构建完成。

如果使用自定义域名，项目根目录中的 `CNAME` 文件会指向：

```text
www.hwsim.top
```

## 贡献

欢迎通过 Issue 提交：

- Bug 反馈
- 课程内容建议
- 剧情与事件建议
- 角色互动建议
- UI 与移动端体验优化建议

也欢迎提交 Pull Request。建议在修改前先开 Issue 说明想法，方便确认方向。

## 免责声明

本项目为同人非盈利作品。霍格沃茨及相关元素版权归 Warner Bros. Entertainment Inc. 及相关权利方所有。本项目仅供学习、交流与娱乐，不主张任何相关版权。

## 联系方式

- 邮箱：hwsimgame@qq.com
- Issues：[https://github.com/citrus02/hwsim/issues](https://github.com/citrus02/hwsim/issues)
