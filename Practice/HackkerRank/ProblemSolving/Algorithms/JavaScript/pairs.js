function pairs(k, arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] - arr[j] === k) {
                count += 1;
            }
        }
    }
    return count;
}
