# TestHub · 测试中心

免费在线测试聚合平台，涵盖人格心理、知识测试、趣味娱乐、智力能力、职业发展等全品类测试。

## 功能特性

- 26 个测试题库，660+ 道题目
- 5 大测试品类：人格心理、知识测试、趣味娱乐、智力能力、职业发展
- 精美的结果图表：MBTI维度条、九型柱状图、大五雷达图、分数环形图
- 暗黑模式切换
- 云端数据存储（Cloudflare KV + D1）
- 后台管理系统

## 技术栈

- 前端：纯 HTML/CSS/JavaScript
- 后端：Cloudflare Workers
- 数据库：Cloudflare KV（缓存）+ D1（持久化）
- 部署：Cloudflare Pages + Workers

## 快速部署

### 前置要求

1. Node.js 18+
2. Cloudflare 账号
3. GitHub 账号

### 第一步：部署后端 API

```bash
# 1. 安装 Wrangler CLI
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 创建 KV 命名空间
wrangler kv:namespace create "KV"
# 记录输出的 ID，更新到 wrangler.toml

# 4. 创建 D1 数据库
wrangler d1 create "testhub-db"
# 记录输出的 ID，更新到 wrangler.toml

# 5. 初始化数据库表
wrangler d1 execute testhub-db --file=./api/schema.sql

# 6. 部署 Worker
wrangler deploy
# 记录输出的 Worker URL
```

### 第二步：更新前端配置

编辑 `index.html` 和 `admin.html`，将 `API_URL` 替换为你的 Worker URL：

```javascript
const API_URL = 'https://testhub-api.你的用户名.workers.dev';
```

### 第三步：部署前端

#### 方法一：GitHub + Cloudflare Pages（推荐）

```bash
# 1. 创建 GitHub 仓库并上传代码
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/testhub.git
git push -u origin main

# 2. 在 Cloudflare 部署
# 登录 Cloudflare → Workers & Pages → Create application → Pages
# Connect to Git → 选择仓库
# 配置：Build command 留空，Build output directory 填 /
```

#### 方法二：直接上传

```bash
# 登录 Cloudflare → Workers & Pages → Create application → Pages
# Upload assets → 上传项目文件夹
```

### 第四步：配置自动部署（可选）

在 GitHub 仓库 Settings → Secrets 中添加：

- `CF_API_TOKEN`：Cloudflare API Token
- `CF_ACCOUNT_ID`：Cloudflare Account ID

之后每次 push 到 main 分支会自动部署。

## 文件结构

```
├── index.html              # 主页面
├── admin.html              # 后台管理
├── _headers                # HTTP 安全头配置
├── _redirects              # URL 重定向规则
├── wrangler.toml           # Cloudflare Workers 配置
├── deploy.sh               # 部署脚本
├── api/                    # 后端 API
│   ├── index.js            # Worker 入口
│   └── schema.sql          # D1 数据库表结构
├── data/                   # 题库数据
│   ├── mbti.js             # MBTI 16型人格 (60题)
│   ├── enneagram.js        # 九型人格 (90题)
│   ├── fun.js              # 趣味测试
│   ├── knowledge.js        # 知识测试
│   ├── personality.js      # 人格测试
│   ├── iq.js               # 智力测试
│   └── career.js           # 职业测试
└── .github/workflows/      # GitHub Actions
    └── deploy.yml          # 自动部署配置
```

## 添加新测试

1. 在 `data/` 目录创建新的 JS 文件
2. 在 `index.html` 的 `DATA_MAP` 中注册
3. 在 `tests` 数组中添加测试信息
4. 推送到 GitHub 自动部署

## 自定义域名

1. 在 Cloudflare Pages 项目设置中添加自定义域名
2. 添加 DNS 记录：
   - 类型: `CNAME`
   - 名称: `@` 或 `www`
   - 目标: `your-project.pages.dev`

## API 接口

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/track` | POST | 记录访问 |
| `/api/stats` | GET | 获取统计数据 |
| `/api/history` | GET | 获取访问历史 |
| `/api/history` | DELETE | 清空历史 |
| `/api/export` | GET | 导出数据 |

## 许可证

仅供娱乐参考，不构成专业建议。
