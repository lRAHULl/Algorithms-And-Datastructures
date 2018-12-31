function alternatingChars(s) {
    let count = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            count += 1;
        }
    }
    return count;
}

console.log(alternatingChars('aba'));