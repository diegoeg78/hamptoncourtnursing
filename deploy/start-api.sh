#!/bin/bash
# Start the Hampton Court API server on port 3002
# Run this from the repo root: bash deploy/start-api.sh

cd "$(dirname "$0")/.."

export PORT=3002
export NODE_ENV=production

echo "Starting Hampton Court API server on port $PORT..."
pnpm --filter @workspace/api-server run dev
