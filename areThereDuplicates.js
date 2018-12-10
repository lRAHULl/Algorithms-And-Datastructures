function areThereDuplicates() {
    let arr = [];
    for (let key in arguments) {
        arr.push(arguments[key]);
    }
    console.log(arr);
    let obj = {};
    for (let item of arr) {
        obj[item] ? obj[item] += 1 : obj[item] = 1;
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }
    return false;
}

function areThereDuplicatesTwo() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3));