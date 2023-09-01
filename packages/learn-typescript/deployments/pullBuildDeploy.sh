#!/bin/zsh
echo "Pulling latest changes"
git pull
echo "Building"
sh build.sh
echo "Deploying"
sh deploy.sh
echo "Done"

