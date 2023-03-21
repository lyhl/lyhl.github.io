set -e

npm run docs:build

cd docs/.vuepress/dist

git init 
git add -A
git commit -m 'deoloy'

git push -f https://github.com/lyhl/.github.io.git master:gh-pages

cd-