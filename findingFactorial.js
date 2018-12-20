function solve(a, b, n) {
    let arr = [];
    arr[0] = a;
    arr[1] = b;
    for (let i = 2; i <= n; i++) {
        // console.log(arr);
        arr.push(arr[0] + arr[1]);
        // if (arr.length !== 4 && arr.length > 4) arr.splice(0, 2);
        console.log(arr);
    }
    // return arr[arr.length - 1];
}

console.log(solve(7, 8,10));