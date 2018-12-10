function averagePair(arr, num) {
    if (arr.length === 0) return false
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if ((arr[start] + arr[end]) / 2 === num) return true;
        else if ((arr[start] + arr[end]) / 2 > num) end--;
        else start++;
    }
    return false;
}

console.log(averagePair([2, 1, 3], 2.5));