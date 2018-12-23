// https://www.hackerrank.com/challenges/frequency-queries
function freqQuery(queries) {
    let result = [];
    let obj = {};
    for (var i = 0; i < queries.length; i++) {
        let op = queries[i][0];
        let val = queries[i][1];
        if (op === 1) {
            obj[val] ? obj[val] += 1 : obj[val] = 1;
            console.log(obj);
        } else if (op === 2) {
            if (obj[val]) obj[val] -= 1;
            if (obj[val] === 0) delete(obj[val]);
            console.log(obj);
        } else if (op === 3) {
            let flag = 0;
            for (let key in obj) {
                if (obj[key] === val) {
                    flag = flag + 1;
                    result.push(1);
                    break;
                }
            }
            if (flag === 0) result.push(0);
        }
    }arr = [];
    for (let key in obj) arr.push(key);
    return arr;
}

console.log(freqQuery([
    [1, 4],
    [2, 3],
    [3, 2],
    [1, 3],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
]))

// function freqQuery(queries) {
//     let arr = []
//     let flagArr = [];
//     for (var i = 0; i < queries.length; i++) {
//         if (queries[i][0] === 1) {
//             arr.push(queries[i][1]);
//             console.log(arr);
//         } else if (queries[i][0] === 2) {
//             let x = queries[i][1]
//             let index = arr.indexOf(x);
//             if (index > -1) arr.splice(index, 1);
//             console.log(arr);
//         } else if (queries[i][0] === 3) {
//             let obj = {};
//             let ind = 0;
//             for (let item of arr) {
//                 obj[item] = obj[item] + 1 || 1;
//             }
//             for (let item of arr) {
//                 if (obj[item] === queries[i][1]) ind++;
//             }
//             if (ind > 0) flagArr.push(1);
//             else flagArr.push(0);
//             console.log(obj);
//         }
//     }
//     return flagArr;
// }