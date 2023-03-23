# 生产侧边栏
python .\\generating-path.py 
msg=$1
if [ -n "$msg" ]; then
    # 提交并推送
    gss
    git add .
    git commit -m "${msg}"
    git pull
    git push
    echo "提交成功"
else
    echo "请输入提交内容"
fi