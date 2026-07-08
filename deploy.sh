#!/bin/bash
# TestHub Cloudflare 部署脚本

echo "=== TestHub Cloudflare 部署 ==="
echo ""

# 检查 wrangler 是否安装
if ! command -v wrangler &> /dev/null; then
    echo "正在安装 Wrangler CLI..."
    npm install -g wrangler
fi

# 登录 Cloudflare
echo "1. 登录 Cloudflare..."
wrangler login

# 创建 KV 命名空间
echo "2. 创建 KV 命名空间..."
KV_OUTPUT=$(wrangler kv:namespace create "KV" 2>&1)
KV_ID=$(echo "$KV_OUTPUT" | grep -oP 'id = "\K[^"]+')
echo "   KV ID: $KV_ID"

# 创建 D1 数据库
echo "3. 创建 D1 数据库..."
DB_OUTPUT=$(wrangler d1 create "testhub-db" 2>&1)
DB_ID=$(echo "$DB_OUTPUT" | grep -oP 'database_id = "\K[^"]+')
echo "   D1 ID: $DB_ID"

# 更新 wrangler.toml
echo "4. 更新 wrangler.toml 配置..."
sed -i "s/YOUR_KV_NAMESPACE_ID/$KV_ID/" wrangler.toml
sed -i "s/YOUR_D1_DATABASE_ID/$DB_ID/" wrangler.toml

# 初始化 D1 数据库表
echo "5. 初始化数据库表..."
wrangler d1 execute testhub-db --file=./api/schema.sql

# 部署 Worker
echo "6. 部署 Worker..."
wrangler deploy

echo ""
echo "=== 部署完成 ==="
echo ""
echo "Worker URL: https://testhub-api.YOUR_SUBDOMAIN.workers.dev"
echo ""
echo "下一步："
echo "1. 在 Cloudflare Pages 中配置环境变量 API_URL"
echo "2. 或者直接使用上面的 Worker URL"
