function isValid(s) {
    let obj = {};
    for (let char of s) {
        obj[char] ? obj[char] += 1 : obj[char] = 1;
    }
    let arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }
    arrObj = {};
    for (let i of arr) {
        arrObj[i] ? arrObj[i] += 1 : arrObj[i] = 1;
    }
    // console.log(arrObj);
    let arr2 = [];
    for (let key in arrObj) {
        arr2.push(arrObj[key]);
    }
    // console.log(arr2);
    if (arr2.length > 2) return 'NO';
    let arr2Keys = [];
    for (let key in arrObj) {
        arr2Keys.push(key);
    }
    let diff = Math.abs(arr2Keys[0] - arr2Keys[1]);
    if (diff <= 1) return 'YES';
    else return 'NO';

    // let count = 0;
    // for (let i = 0; i < arr.length - 1; i++) {
    //     if (i === 0 || i == arr.length - 1) {

    //     }
    //     if (arr[i] === arr[i + 1]) {
    //         continue;
    //     } else {
    //         count += Math.abs(arr[i] - arr[i + 1]);
    //     }
    // }
    // // console.log(arr);
    // // console.log(count);
    // if (count / 2 <= 1) return 'YES';
    // else return 'NO';
}

console.log(isValid('aaaabbcc'));