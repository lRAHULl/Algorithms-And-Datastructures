function breakingRecords(scores) {
    let n = scores.length;
    minArr = [];
    maxArr = [];
    min = scores[0];
    max = scores[0];
    for (let i = 0; i < n; i++) {
        if (scores[i] < min) {
            min = scores[i];
            minArr.push(min);
        } else if (scores[i] > max) {
            max = scores[i];
            maxArr.push(max);
        }
    }
    return console.log(maxArr.length, minArr.length);
}
breakingRecords([3,4,21,36,10,28,35,5,24,42]);