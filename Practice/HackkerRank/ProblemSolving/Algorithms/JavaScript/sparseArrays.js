function matchingStrings(strings, queries) {
    let strObj = {};
    for (let str of strings) {
        strObj[str] ? strObj[str] += 1 : strObj[str] = 1;
    }
    let queryCount = [];
    for (let str of queries) {
        if (strObj[str]) {
            queryCount.push(strObj[str]);
        } else {
            queryCount.push(0);
        }
    }
    return queryCount;
}

console.log(matchingStrings(['aba', 'aab', 'aca'], ['aca']));