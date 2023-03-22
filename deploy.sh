set -e

npm run docs:build

cd docs/.vuepress/dist

git init 
git add -A
git commit -m 'deoloy'

git push -f https://gitee.com/lyh_ma/lyh.gitee.io.git master:gh-pages

cd-