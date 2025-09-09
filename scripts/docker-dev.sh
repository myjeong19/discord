#!/usr/bin/env sh
set -eu


echo "[dev] build image (target=dev)"
docker build --target dev -t discord-web:dev .

echo "[dev] run container on :3000"
docker rm -f discord-client >/dev/null 2>&1 || true

docker run --rm -it \
  --name discord-client \
  -p 3000:3000 \
  -v "$PWD":/app \
  -w /app \
  discord-web:dev \
  sh -lc "pnpm i && pnpm dev --host"


