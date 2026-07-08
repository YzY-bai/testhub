# TestHub · 测试中心

免费在线测试聚合平台，涵盖人格心理、知识测试、趣味娱乐、智力能力、职业发展等全品类测试。

## 功能特性

- 27 个测试题库，660+ 道题目
- 5 大测试品类：人格心理、知识测试、趣味娱乐、智力能力、职业发展
- 精美的结果图表：MBTI维度条、九型柱状图、大五雷达图、分数环形图
- 云端数据存储（Cloudflare KV + D1）
- 后台管理系统（密码保护）

## 快速部署（Fork 方式）

### 第一步：Fork 仓库

1. 访问 https://github.com/YzY-bai/testhub
2. 点击右上角 **Fork** 按钮
3. 选择你的 GitHub 账号，点击 **Create fork**

### 第二步：连接 Cloudflare Pages

1. 登录 https://dash.cloudflare.com
2. **Workers & Pages** → **Create application** → **Pages**
3. **Connect to Git** → 选择你 Fork 的仓库
4. 配置：
   - Project name：自定义名称
   - Build command：**留空**
   - Build output directory：`/`
5. 点击 **Save and Deploy**

### 第三步：配置 KV 存储

1. **Storage & Databases** → **KV** → **Create namespace**
2. 名称：`TESTHUB`
3. 在 Pages 项目 → **Settings** → **Bindings** → **Add binding**
4. 选择 **KV namespace**，Variable name 填 `KV`，选择刚才创建的命名空间

### 第四步：配置 D1 数据库

1. **Storage & Databases** → **D1 SQL 数据库** → **Create**
2. 名称：`testhub-db`
3. 在 D1 的 **Console** 中执行：

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

4. 在 Pages 项目 → **Settings** → **Bindings** → **Add binding**
5. 选择 **D1 database**，Variable name 填 `DB`，选择 `testhub-db`

### 第五步：配置环境变量

在 Pages 项目 → **Settings** → **Environment variables** → **Add variable**：

| Variable name | Value |
|---------------|-------|
| `ADMIN_PASSWORD` | 你的管理员密码 |

### 第六步：访问网站

部署完成后访问：

- 主站：`https://你的项目名.pages.dev`
- 后台：`https://你的项目名.pages.dev/admin.html`

## 文件结构

```
├── index.html                # 主页面
├── admin.html                # 后台管理
├── _headers                  # HTTP 安全头配置
├── functions/                # Cloudflare Pages Functions
│   └── api/
│       ├── auth.js           # 登录认证
│       ├── track.js          # 记录访问
│       ├── stats.js          # 获取统计
│       ├── history.js        # 访问历史
│       ├── export.js         # 导出数据
│       ├── tests.js          # 题库管理（上传/删除）
│       └── test.js           # 获取单个测试
├── data/                     # 题库数据
│   ├── mbti.js               # MBTI 16型人格 (60题)
│   ├── enneagram.js          # 九型人格 (90题)
│   ├── fun.js                # 趣味测试（水果/超能力/前世/爱情/社交）
│   ├── knowledge.js          # 知识测试（历史/科学/地理/英语/编程）
│   ├── personality.js        # 人格测试（大五/DISC/霍兰德/依恋/EQ/气质）
│   ├── iq.js                 # 智力测试（逻辑/数字/空间/创造力）
│   └── career.js             # 职业测试（价值观/领导力/学习风格/压力）
└── love-personality-test.json  # 恋爱人格测试题库（示例）
```

## 添加新测试

### 方法一：通过后台上传

1. 登录后台 → 题库管理 → 新增测试
2. 上传 JSON 格式的题库文件
3. 保存后主站自动显示

### 方法二：通过代码添加

1. 在 `data/` 目录创建新的 JS 文件
2. 在 `index.html` 的 `DATA_MAP` 中注册
3. 在 `tests` 数组中添加测试信息
4. 提交到 GitHub 自动部署

## 自定义域名

1. 在 Pages 项目 → **Settings** → **Custom domains**
2. 添加你的域名
3. 配置 DNS：`CNAME` → `你的项目名.pages.dev`

## API 接口

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/auth` | POST | 登录认证 |
| `/api/track` | POST | 记录访问 |
| `/api/stats` | GET | 获取统计数据 |
| `/api/history` | GET/DELETE | 获取/清空访问历史 |
| `/api/tests` | GET/POST/DELETE | 题库管理 |
| `/api/test` | GET | 获取单个测试 |
| `/api/export` | GET | 导出数据 |

## 许可证

仅供娱乐参考，不构成专业建议。
