def replace_str_index(text,index=0,replacement='1'):
    return '%s%s%s'%(text[:index],replacement,text[index+1:])

def add_binary (a, b):
    c = ''
    max_len = max(len(a), len(b))
    a = a.zfill(max_len)
    b = b.zfill(max_len)
    carry = 0
    for i in range(max_len - 1, -1, -1):
        if a[i] == '0' and b[i] == '0':
            if carry == 0: c += '0'
            else: 
                c += '1'
                carry = 0
        elif (a[i] == '1' and b[i] == '0') or (a[i] == '0' and b[i] == '1'):
            if carry == 0: c += '1'
            else: 
                c += '0'
                carry = 1
        elif a[i] == '1' and b[i] == '1':
            if carry == 0:
                c += '0'
                carry = 1
            else:
                c += '1'
                carry = 1
    if carry == 1: c = '1' + c
    else: c = '0' + c
    return c

def changeBits(a, b, queries):
    # # Write your code here
    # print(a)
    # print(b)
    # print(queries)
    res = ''
    for x in queries:
        queryArr = x.split(' ')
        query = queryArr[0]
        idx = int(queryArr[1])
        # print(queryArr)
        if query == 'set_a':
            x = queryArr[2]
            a = replace_str_index(a, idx, x)[::-1]
            # a[idx] = x
            print('a: ', a)
        elif query == 'set_b':
            x = queryArr[2]
            b = replace_str_index(b, idx, x)[::-1]
            print('b: ',b)
        elif query == 'get_c':
            c = add_binary (a, b)
            print('c: ', c)
            temp = c[idx]
            res += temp
    print(res[::-1])

# print(add_binary('00001', '11111'))

changeBits('00000', '11111', ['set_a 0 1','get_c 5', 'get_c 1', 'set_b 2 0', 'get_c 5'])




# for i in range(q):

#     cmd = input().strip().split(' ')
#     inx = int(cmd[1])
#     cmd.append(7)
#     bit = int(cmd[2])

#     if cmd[0] =='set_a':

#         a = setbit(a, inx, bit)

#     elif cmd[0] =='set_b':

#         b = setbit(b, inx, bit)

#     else:

#         c = a+b
#         cbit = int (bool (c & (1<<inx)))
#         out += str(cbit)

# print (out)