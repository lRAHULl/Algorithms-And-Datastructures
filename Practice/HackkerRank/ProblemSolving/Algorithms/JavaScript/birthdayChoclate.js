function birthday(s, d, m) {
    let n = s.length;
    let count = 0;
    let x = 0;
    let arr = [];
    let temp = 0;
    for (let i = 0; i < m; i++) {
        x = x + s[i];
    }
    arr.push(x);
    for (let i = m; i < s.length; i++) {
        temp = temp - s[i -m] + s[i] 
        x = temp
        arr.push(x)
    }
    console.log(arr);
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));