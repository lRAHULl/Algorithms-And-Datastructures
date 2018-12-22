// // https://www.hackerrank.com/challenges/frequency-queries
// function freqQuery(queries) {
//     let arr = []
//     let count = 0;
//     for (var i = 0; i < queries.length; i++) {
//         if (queries[i][0] === 1) {
//             arr.push(queries[i][1]);
//         } else if (queries[i][0] === 2) {
//             let x = queries[i][1]
//             if (x in arr) {
//                 // arr.splice(arr.indexOf(x), 1);
//                 arr.shift(x);
//             }
//         } else if (queries[i][0] === 3) {
//             let obj = {};
//             for (let item of arr) {
//                 obj[item] = obj[item] + 1 || 1;
//             }
//             console.log(obj);
//         }
//         // console.log(arr);

//     }
//     console.log(arr)
//     console.log(count)
// }

// freqQuery([
//     [1, 3],
//     [2, 3],
//     [3, 2],
//     [1, 4],
//     [1, 5],
//     [1, 5],
//     [1, 4],
//     [3, 2],
//     [2, 4],
// ])

function freqQuery(queries) {
    let arr = []
    let flagArr = [];
    for (var i = 0; i < queries.length; i++) {
        let flag = 0;
        if (queries[i][0] === 1) {
            arr.push(queries[i][1]);
        } else if (queries[i][0] === 2) {
            let x = queries[i][1]
            if (x in arr) {
                arr.shift(x);
            }
        } else if (queries[i][0] === 3) {
            let obj = {};
            let ind = 0;
            for (let item of arr) {
                obj[item] = obj[item] + 1 || 1;
            }
            for (let item of arr) {
                if (obj[item] === queries[i][1]) ind++;
            }
            if (ind > 0) flagArr.push(1);
            else flagArr.push(0);
        }
    }
    return flagArr;
}