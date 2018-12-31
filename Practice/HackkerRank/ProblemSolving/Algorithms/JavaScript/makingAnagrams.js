function makeAnagram(a, b) {
    let obj1 = {};
    let obj2 = {};
    let count = 0;
    for (let char of a) {
        obj1[char] ? obj1[char] += 1 : obj1[char] = 1;
    }
    for (let char of b) {
        obj2[char] ? obj2[char] += 1 : obj2[char] = 1;
    }
    // console.log(obj1);
    // console.log(obj2);
    for (let key in obj1) {
        if (!(key in obj2)) {
            count += obj1[key];
            delete(obj1[key]);
            // console.log(key);
        }
    }
    for (let key in obj2) {
        if (!(key in obj1)) {
            count += obj2[key];
            delete(obj2[key]);
            // console.log(key);
        }
    }
    // console.log(count);
    for (let key in obj1) {
        if (obj1[key] === obj2[key]) {
            continue;
        } else {
            count += Math.abs(obj1[key] - obj2[key])
        }
    }
    // console.log(obj1);
    // console.log(obj2);
    // console.log(count);
    return count;
}

console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));