#!/bin/zsh
docker buildx build --push --platform linux/arm64  -t ajayedap/playground:learn-typescript ../
