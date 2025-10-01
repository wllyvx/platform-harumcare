#!/bin/bash

# Script untuk deploy project ke Cloudflare
# Usage: ./deploy-cloudflare.sh

echo "🚀 Starting deployment to Cloudflare..."

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI not found. Installing..."
    npm install -g wrangler
fi

# Check if user is logged in
if ! wrangler whoami &> /dev/null; then
    echo "🔐 Please login to Cloudflare first:"
    wrangler login
fi

echo "📦 Installing dependencies..."
npm install
cd backend && npm install && cd ..

echo "🔨 Building backend..."
cd backend
npm run build:worker
echo "🚀 Deploying backend to Cloudflare Workers..."
wrangler deploy
cd ..

echo "🔨 Building frontend..."
npm run build

echo "🚀 Deploying frontend to Cloudflare Pages..."
wrangler pages deploy dist

echo "✅ Deployment completed!"
echo ""
echo "📋 Next steps:"
echo "1. Set environment variables in Cloudflare Dashboard"
echo "2. Update CORS_ORIGIN in backend worker"
echo "3. Update PUBLIC_API_URL in frontend pages"
echo "4. Test your deployment"
echo ""
echo "🔗 Useful links:"
echo "- Cloudflare Dashboard: https://dash.cloudflare.com"
echo "- Workers: https://dash.cloudflare.com/workers"
echo "- Pages: https://dash.cloudflare.com/pages"
