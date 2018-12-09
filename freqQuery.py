def freqQuery(queries):
    arr = []
    count = 0
    a = dict()
    for i in range(len(queries)):
        if queries[i][0] == 1:
            arr.append(queries[i][1])
        elif queries[i][0] == 2:
            y = queries[i][1]
            if y in arr:
                arr.pop(arr.index(y))
        elif queries[i][0] == 3:
            z = queries[i][1]
            for i in arr:
                if i in a:
                    a[i] = a[i] + 1
                else:
                    a[i] = 1
            for key in a:
                if a[key] == z:
                    print(1)
                else:
                    print(0)
                continue
        # print(a)
        print(arr)
    print(arr)


freqQuery([
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
])
