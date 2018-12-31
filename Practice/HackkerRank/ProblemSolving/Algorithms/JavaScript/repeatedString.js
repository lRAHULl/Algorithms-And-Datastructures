
// console.log(count)
// Complete the repeatedString function below.
function repeatedString(s, n) {
    x = s.length
    a = []
    j = 0;
    for (i = 0; i < n; i) {
        if (j < x) {
            a.push(s[j])
            j++;
            i++;
        } else {
            j = 0;
        }

    }
    count = 0;
    for (let j = 0; j < n; j++) {
        if (a[j] === 'a') {
            count++;
        }
    }
    // let lenS = s.length;
    // let i = 0;
    // let charArr = [];
    // for (let j = 0; j < lenS; j) {
    //     if (i < lenS) {
    //         charArr.push(s[i]);
    //         i++;
    //         j++;
    //     } else {
    //         i = 0;
    //     }
    // }
    // let count = 0;
    // for (let j = 0; j < n; j++) {
    //     if (charArr[j] === 'a') {
    //         count++;
    //     }
    // }
    return count
}
console.log(repeatedString('aba', 10))