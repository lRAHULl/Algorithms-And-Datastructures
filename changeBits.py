# def setbit(val, i, bit):

#     num = 1 << i

#     if bit:
#         return val | num

#     return val & ~num
# def changeBits(a, b, queries):
#     res = ''
#     for x in queries:
#             queryArr = x.split(' ')
#             query = queryArr[0]
#             idx = int(queryArr[1])
#             # print(queryArr)
#             if query == 'set_a':
#                 print('a: ', a)
#                 x = int(query[2])
#                 print('x: ', x)
#                 a = setbit(a, idx, x)

#                 # a[idx] = x
#             elif query == 'set_b':

#                 x = int(query[2])

#                 b = setbit(b, idx, x)

#             elif query == 'get_c':

#                 c = a + b

#                 cbit = int (bool (c & (1<<inx)))

#                 res += str(temp)

#     print(res)


# changeBits('00000', '11111', ['set_a 0 1','get_c 5', 'get_c 1', 'set_b 2 0', 'get_c 5'])


def setbit(val, i, bit):

    num = 1 << i

    if bit:
        return val | num

    return val & ~num

n, q = map(int, input().strip().split(' '))
a = int(input().strip(),2)
b = int(input().strip(),2)
out = ''

for i in range(q):

    cmd = input().strip().split(' ')
    inx = int(cmd[1])
    cmd.append(7)
    bit = int(cmd[2])

    if cmd[0] =='set_a':

        a = setbit(a, inx, bit)

    elif cmd[0] =='set_b':

        b = setbit(b, inx, bit)

    else:

        c = a+b
        cbit = int (bool (c & (1<<inx)))
        out += str(cbit)

print (out)