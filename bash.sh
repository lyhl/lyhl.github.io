#!/bin/bash

# 添加两个远程仓库
git remote add repo-a https://github.com/lyhl/lyhl.github.io.git
git remote add repo-b https://gitee.com/lyh_ma/lyh.gitee.io.git

# 推送修改到所有远程仓库
git push repo-a
git push repo-b
