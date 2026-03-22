#!/bin/bash
# Deploy FirearmSelect to Vercel via GitHub
# Usage: ./deploy.sh "commit message"

set -e

MSG="${1:-Update site}"

git add -A
git commit -m "$MSG"
git push origin main

echo ""
echo "Deploy complete. Check firearmselect.com in 2 minutes."
