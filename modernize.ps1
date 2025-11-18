# AWS Serverless Airline Modernization Script
# This script updates dependencies and builds the modernized application

Write-Host "Starting AWS Serverless Airline Modernization..." -ForegroundColor Green

# Frontend modernization
Write-Host "Updating Frontend Dependencies..." -ForegroundColor Yellow
Set-Location "src\frontend"

# Remove old lock files and node_modules
if (Test-Path "yarn.lock") { Remove-Item "yarn.lock" -Force }
if (Test-Path "package-lock.json") { Remove-Item "package-lock.json" -Force }
if (Test-Path "node_modules") { Remove-Item "node_modules" -Recurse -Force }

# Install new dependencies
npm install

Write-Host "Frontend dependencies updated successfully!" -ForegroundColor Green

# Backend - Loyalty Service (TypeScript)
Write-Host "Updating Loyalty Service Dependencies..." -ForegroundColor Yellow
Set-Location "..\backend\loyalty"

if (Test-Path "package-lock.json") { Remove-Item "package-lock.json" -Force }
if (Test-Path "node_modules") { Remove-Item "node_modules" -Recurse -Force }

npm install

Write-Host "Loyalty service dependencies updated successfully!" -ForegroundColor Green

# Backend - Booking Service (Python)
Write-Host "Updating Booking Service Dependencies..." -ForegroundColor Yellow
Set-Location "..\booking"

# Update Poetry dependencies
poetry update

Write-Host "Booking service dependencies updated successfully!" -ForegroundColor Green

# Backend - Payment Service (Python)
Write-Host "Updating Payment Service Dependencies..." -ForegroundColor Yellow
Set-Location "..\payment"

# Update Poetry dependencies
poetry update

Write-Host "Payment service dependencies updated successfully!" -ForegroundColor Green

# Return to root
Set-Location "..\..\..\"

Write-Host "Modernization Complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review and test the updated code" -ForegroundColor White
Write-Host "2. Update your AWS Lambda runtime to Node.js 18.x for TypeScript functions" -ForegroundColor White
Write-Host "3. Update your AWS Lambda runtime to Python 3.11 for Python functions" -ForegroundColor White
Write-Host "4. Test the application thoroughly before deploying to production" -ForegroundColor White