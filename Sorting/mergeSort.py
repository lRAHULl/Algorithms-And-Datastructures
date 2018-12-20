def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    middle = int(round(len(arr) / 2))
    left = mergeSort(arr[0: middle])
    right = mergeSort(arr[middle:])
    return merge(left, right)


def merge(left, right):
    mergedArr = []
    i = 0
    j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            mergedArr.append(left[i])
            i += 1
        else:
            mergedArr.append(right[j])
            j += 1
    while i < len(left):
        mergedArr.append(left[i])
        i += 1
    while j < len(right):
        mergedArr.append(right[j])
        j += 1
    return mergedArr


print(mergeSort([100, 56, 49, 50, 56, 2, 3, 5, 1, -16, 0, 6, 7, 101]))
