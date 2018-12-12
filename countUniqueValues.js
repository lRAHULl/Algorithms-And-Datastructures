const countUniqueValues = (arr) => { // Array must be sorted
    if (arr.length === 0) {
        return 0;
    }
    let p1 = 0;
    for (let p2 = 1; p2 < arr.length; p2++) {
        if (arr[p1] !== arr[p2]) {
            p1++;
            arr[p1] = arr[p2];
        }
    }
    // return arr
    // return arr.slice(0, p1).length;
    return p1 + 1;
}

console.log(countUniqueValues([1, 2, 2, 5, 5, 66, 7, 7, 8, 9, 10]));