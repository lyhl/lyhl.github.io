import os

# 运行生产侧边栏的路径
path = {}
# listdir = 'E:\\workspace\\vuepress-starter\\docs\\view'
# sidebar = "E:\\workspace\\vuepress-starter\\docs\\.vuepress\\config\\sidebar.js"
listdir = 'D:\\workspace\\test\\vuepress\\docs\\view'
sidebar = "D:\\workspace\\test\\vuepress\\docs\\.vuepress\\config\\sidebar.js"


def generating_Path():
    for file_name in os.listdir(listdir):
        for item_file_name in os.listdir(listdir+'\\'+file_name):
            path['/view/'+file_name+'/'+item_file_name +
                 '/'] = [{'children': ['README.md']}]
            for childen_item_file_name in os.listdir(listdir+'\\'+file_name+'\\'+item_file_name):
                if childen_item_file_name != 'README.md':
                    path['/view/'+file_name+'/'+item_file_name +
                         '/'][0]['children'].append(childen_item_file_name)
    file = open(sidebar, 'w', encoding='utf-8')
    file.write('export default' + str(path))
    file.close()


if __name__ == "__main__":
    generating_Path()
