function countUniqueValues(arr) { // Array must be sorted
    if (arr.length === 0) {
        return 0;
    }
    p1 = 0;
    for (var p2 = 1; p2 < arr.length; p2++) {
        if (arr[p1] !== arr[p2]) {
            p1++;
            arr[p1] = arr[p2];
        }
    }
    arr = arr.slice(0, p1 + 1)
    return arr;
}

console.log(countUniqueValues([1,2,2,5,5,66,7,7,8,9,10]));