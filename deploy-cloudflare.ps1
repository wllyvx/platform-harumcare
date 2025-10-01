# Script PowerShell untuk deploy project ke Cloudflare
# Usage: .\deploy-cloudflare.ps1

Write-Host "🚀 Starting deployment to Cloudflare..." -ForegroundColor Green

# Check if wrangler is installed
try {
    wrangler --version | Out-Null
    Write-Host "✅ Wrangler CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ Wrangler CLI not found. Installing..." -ForegroundColor Red
    npm install -g wrangler
}

# Check if user is logged in
try {
    wrangler whoami | Out-Null
    Write-Host "✅ Logged in to Cloudflare" -ForegroundColor Green
} catch {
    Write-Host "🔐 Please login to Cloudflare first:" -ForegroundColor Yellow
    wrangler login
}

Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
npm install
Set-Location backend
npm install
Set-Location ..

Write-Host "🔨 Building backend..." -ForegroundColor Blue
Set-Location backend
npm run build:worker
Write-Host "🚀 Deploying backend to Cloudflare Workers..." -ForegroundColor Blue
wrangler deploy
Set-Location ..

Write-Host "🔨 Building frontend..." -ForegroundColor Blue
npm run build

Write-Host "🚀 Deploying frontend to Cloudflare Pages..." -ForegroundColor Blue
wrangler pages deploy dist

Write-Host "✅ Deployment completed!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Yellow
Write-Host "1. Set environment variables in Cloudflare Dashboard"
Write-Host "2. Update CORS_ORIGIN in backend worker"
Write-Host "3. Update PUBLIC_API_URL in frontend pages"
Write-Host "4. Test your deployment"
Write-Host ""
Write-Host "🔗 Useful links:" -ForegroundColor Cyan
Write-Host "- Cloudflare Dashboard: https://dash.cloudflare.com"
Write-Host "- Workers: https://dash.cloudflare.com/workers"
Write-Host "- Pages: https://dash.cloudflare.com/pages"
