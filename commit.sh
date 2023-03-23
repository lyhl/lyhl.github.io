# 提交并推送
python .\\generating-path.py
msg=$1
if [ -n "$msg" ]; then
    
    gss
    git add .
    git commit -m "${msg}"
    git pull
    git push
    echo "提交成功"
else
    echo "请输入提交内容"
fi