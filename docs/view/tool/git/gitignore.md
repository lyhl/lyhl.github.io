# 忽略文件

```js
根目录创建 .gitignore 文件
```

忽略规则

```
# 注释
*.a       # 忽略所有以.a为扩展名的文件    
!lib.a    # 但是名为lib.a的文件或目录不要忽略，即使前面设置了对*.a的忽略
/TODO     # 只忽略此目录下的TODO文件，子目录中的TODO文件不忽略
build/    # 忽略所有build目录下的文件，但如果是名为build的文件则不忽略
doc/*.txt # 忽略文件如doc/notes.txt，但是文件如doc/server/arch.txt不忽略
```

