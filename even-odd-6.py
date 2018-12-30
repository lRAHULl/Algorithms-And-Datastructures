def eo6(arr):
    eArray = []
    oArray = []
    dupArr = arr
    for x in arr:
        if x % 2 == 0:
            eArray.append(x)
        else:
            oArray.append(x)
    print(eArray, oArray)

    if len(eArray) == len(oArray):
        for i in range(len(dupArr)):
            if i % 2 == 0:
                dupArr[i] = eArray[0]
                eArray.pop(0)
            else:
                dupArr[i] = oArray[0]
                oArray.pop(0)
    else:
        small = min(len(oArray), len(eArray))
        for i in range((small * 2) - 1):
            if len(eArray) != 0 and len(oArray) != 0:
                if i % 2 == 0:
                    dupArr[i] = eArray[0]
                    eArray.pop(0)
                else:
                    dupArr[i] = oArray[0]
                    oArray.pop(0)
        if len(oArray) < len(eArray):
            big = eArray
        else:
            big = oArray
        dupArr[(small * 2) - 1:] = big
    print(dupArr)


eo6([1, 2, 3, 4, 5, 5, 6])
