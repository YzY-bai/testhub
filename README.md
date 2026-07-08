# TestHub · 测试中心

免费在线测试聚合平台，涵盖人格心理、知识测试、趣味娱乐、智力能力、职业发展等全品类测试。

## 功能特性

- 26 个测试题库，660+ 道题目
- 5 大测试品类：人格心理、知识测试、趣味娱乐、智力能力、职业发展
- 精美的结果图表：MBTI维度条、九型柱状图、大五雷达图、分数环形图
- 暗黑模式切换
- 云端数据存储（Cloudflare KV + D1）
- 后台管理系统（密码保护）

## 技术栈

- 前端：纯 HTML/CSS/JavaScript
- 后端：Cloudflare Pages Functions
- 数据库：Cloudflare KV（缓存）+ D1（持久化）
- 部署：Cloudflare Pages

## 文件结构

```
├── index.html              # 主页面
├── admin.html              # 后台管理
├── _headers                # HTTP 安全头配置
├── functions/              # Cloudflare Pages Functions（API）
│   └── api/
│       ├── auth.js         # 登录认证
│       ├── track.js        # 记录访问
│       ├── stats.js        # 获取统计
│       ├── history.js      # 访问历史
│       └── export.js       # 导出数据
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

## 部署步骤

### 第一步：上传代码到 GitHub

```bash
git init
git add .
git commit -m "初始版本"
git remote add origin https://github.com/你的用户名/testhub.git
git push -u origin main
```

### 第二步：创建 Cloudflare Pages 项目

1. 登录 https://dash.cloudflare.com
2. **Workers & Pages** → **Create application** → **Pages**
3. **Connect to Git** → 选择 GitHub 仓库
4. 配置：
   - Project name：`testhub`
   - Build command：**留空**
   - Build output directory：`/`
5. 点击 **Save and Deploy**

### 第三步：配置 KV 存储

1. **Storage & Databases** → **KV** → **Create namespace**
2. 名称：`TESTHUB`
3. 创建后，在 Pages 项目 → **Settings** → **Bindings**
4. 添加 KV Binding：
   - Variable name：`KV`
   - KV namespace：选择 `TESTHUB`

### 第四步：配置 D1 数据库

1. **Storage & Databases** → **D1 SQL 数据库** → **Create**
2. 名称：`testhub-db`
3. 在 D1 的 **Console** 中执行建表 SQL：

```sql
CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  test_id TEXT NOT NULL,
  result TEXT,
  duration INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_visits_test_id ON visits(test_id);
CREATE INDEX IF NOT EXISTS idx_visits_created_at ON visits(created_at);
```

4. 在 Pages 项目 → **Settings** → **Bindings**
5. 添加 D1 Binding：
   - Variable name：`DB`
   - D1 database：选择 `testhub-db`

### 第五步：配置环境变量

在 Pages 项目 → **Settings** → **Environment variables** 添加：

| Variable name | Value | 说明 |
|---------------|-------|------|
| `ADMIN_PASSWORD` | `你的密码` | 后台登录密码 |

### 第六步：完成

等待部署完成后访问：

- 主站：`https://你的项目名.pages.dev`
- 后台：`https://你的项目名.pages.dev/admin.html`

## 添加新测试

1. 在 `data/` 目录创建新的 JS 文件
2. 在 `index.html` 的 `DATA_MAP` 中注册
3. 在 `tests` 数组中添加测试信息
4. 推送到 GitHub 自动部署

## 自定义域名

1. 在 Pages 项目 → **Custom domains**
2. 添加你的域名
3. 配置 DNS：`CNAME` → `你的项目名.pages.dev`

## API 接口

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/auth` | POST | 登录认证 |
| `/api/track` | POST | 记录访问 |
| `/api/stats` | GET | 获取统计数据 |
| `/api/history` | GET | 获取访问历史 |
| `/api/history` | DELETE | 清空历史 |
| `/api/export` | GET | 导出数据 |

## 许可证

仅供娱乐参考，不构成专业建议。
