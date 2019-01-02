function getMoneySpent(keyboards, drives, b) {
    let arr = [];

    for (let i of keyboards) {
        for (let j of drives) {
            arr.push(i + j);
        }
    }
    arr = arr.filter(i => i <= b);
    if (arr.length) {
        return Math.max(...arr);
    }
    return -1;
}

console.log(getMoneySpent([5], [4], 5));
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));