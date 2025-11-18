# Local Development Setup Guide

## Prerequisites
1. **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
2. **Python 3.11+** - Download from [python.org](https://python.org/)
3. **Git** - Download from [git-scm.com](https://git-scm.com/)

## Step 1: Install Node.js Dependencies

Open PowerShell in the project root and run:

```powershell
cd "src\frontend"
npm install
```

## Step 2: Create Mock AWS Configuration

Since we don't have AWS services set up yet, we'll create a mock configuration:

```powershell
# Still in src\frontend directory
New-Item -Name "src\aws-exports.js" -ItemType File -Force
```

## Step 3: Start the Frontend Development Server

```powershell
npm run serve
```

The website will be available at: http://localhost:8080

## What You'll See
- The frontend interface will load
- Some features won't work (authentication, booking) since they need AWS services
- You can navigate the UI and see the design

## Next Steps
Once you want full functionality, we'll set up:
1. AWS Amplify for authentication
2. DynamoDB for data storage
3. API Gateway for backend services