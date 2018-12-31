function leftRotation(n, d, arr) {
    for (let i = 0; i < d; i++) {
        let p = arr.shift();
        arr.push(p);
    }
    return arr.join(' ');
}

console.log(leftRotation(5, 1, [1, 2, 3, 4, 5]));