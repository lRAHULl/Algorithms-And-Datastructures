def odd2(arr):
    obj = dict()
    a = []
    for x in arr:
        x = str(x)
        obj[x] = 0
    for x in arr:
        x = str(x)
        obj[x] += 1
    for key in obj:
        if obj[key] % 2 != 0:
            a.append(key)
    if len(a) == 0:
        print(0)
    else:
        for i in a:
            print(i)


odd2([4, 4, 8, 8, 23, 23])
