#!/bin/bash
set -o errexit

# config
git config --global user.email "xerona@gmail.com"
git config --global user.name "Jake Stewart"

# deploy
echo 'building'
ng build --prod
cd dist
sed -i 's/src\="/src="\/sport-stats\//g' index.html
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1
echo 'deployment complete'
