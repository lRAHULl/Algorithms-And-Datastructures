function freqQuery(queries) {
    let arr = []
    let count = 0;
    for (var i = 0; i < queries.length; i++) {
        if (queries[i][0] === 1) {
            arr.push(queries[i][1]);
        } else if (queries[i][0] === 2) {
            let x = queries[i][1]
            if (x in arr) {
                arr.splice(arr.indexOf(x), 1);
            }
        } else if (queries[i][0] === 3) {
            count += 1;
        }
        console.log(arr)

    }
    console.log(arr)
    console.log(count)
}

freqQuery([
    [1, 3],
    [2, 3],
    [3, 2],
    [1, 4],
    [1, 5],
    [1, 5],
    [1, 4],
    [3, 2],
    [2, 4],
])