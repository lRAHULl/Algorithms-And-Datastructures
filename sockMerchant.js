function sockMerchant(n, ar) {
    let obj = {};
    for (var char of ar) {
        obj[char] = obj[char] + 1 || 1;
    }
    for (var key in obj) {
        if (obj[key] % 2 === 0) {
            obj[key] = obj[key] / 2
        } else {
            obj[key] = obj[key] - 1;
            obj[key] = obj[key] / 2
        }
    }
    count = 0;
    for (var key in  obj) {
        count += obj[key]
    }
    return obj;
}


//9
// 10 20 20 10 10 30 50 10 20
//
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))