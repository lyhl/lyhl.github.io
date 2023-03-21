import re

# 导入文件的路径
path = 'E:\\xxx\\test.nc'

# 导出文件的路径
export_path = 'E:\\xxxx\\data1.js'

list = []
result = ''
x_value = None
y_value = None
z_value = None
type_value = None
pattern = r'^[Nn]\d+\s+'
n_pattern = r'^(G0\d*|G01\d*|G02\d*|G03\d*|Y[\d.]*|X[\d.]*|Z[\d.]*)'
y_pattern = r'Y(-?\d+(\.\d+)?)'
x_pattern = r'X(-?\d+(\.\d+)?)'
z_pattern = r'Z(-?\d+(\.\d+)?)'
i_pattern = r'I(-?\d+(\.\d+)?)'
j_pattern = r'J(-?\d+(\.\d+)?)'
t_pattern = r'((G0\d?)|(G01)|(G02)|(G03))'


with open(path) as f:
    for line in f:
        if line.startswith('N'):
            result = re.sub(pattern, '', line)
            if re.findall(n_pattern, result):
                x_value_prev = x_value
                y_value_prev = y_value
                z_value_prev = z_value
                type_value_prev = type_value
                match_x = re.search(x_pattern, result)
                match_y = re.search(y_pattern, result)
                match_z = re.search(z_pattern, result)
                match_type = re.search(t_pattern, result)
                x_value = float(match_x.group(
                    1)) if match_x else x_value_prev
                y_value = float(match_y.group(
                    1)) if match_y else y_value_prev
                z_value = float(match_z.group(
                    1)) if match_z else z_value_prev
                type_value = match_type.group(
                    1) if match_type else type_value_prev
                list.append({
                    'x': x_value,
                    'y': y_value,
                    'z': z_value,
                    'I': float(re.search(i_pattern, result).group(1)) if re.search(i_pattern, result) else 'undefined',
                    'J': float(re.search(j_pattern, result).group(1)) if re.search(j_pattern, result) else 'undefined',
                    'type': type_value,
                })
file = open(export_path,
            'w', encoding='utf-8')
file.write(str(list))
file.close()
