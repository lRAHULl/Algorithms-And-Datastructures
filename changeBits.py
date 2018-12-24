def changeBits(a, b, queries):
    res = ''
    for x in queries:
            queryArr = x.split(' ')
            query = queryArr[0]
            idx = int(queryArr[1])
            # print(queryArr)
            if query == 'set_a':
                print('a: ', a)
                x = query[2]
                print('x: ', x)
                a = a.replace(a[idx], x, 1)

                # a[idx] = x
            elif query == 'set_b':

                x = query[2]

                b.replace(b[idx], x, 1)

            elif query == 'get_c':

                c = a + b

                temp = c[idx]

                res += temp

    print(res)


changeBits('00000', '11111', ['set_a 0 1',
                              'get_c 5', 'get_c 1', 'set_b 2 0', 'get_c 5'])
