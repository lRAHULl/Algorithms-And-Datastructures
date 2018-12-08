function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for (var char of str1) {
        obj1[char] = obj1[char] + 1 || 1;
    }
    for (var char of str2) {
        obj2[char] = obj2[char] + 1 || 1;
    }
    console.log(obj1);
    console.log(obj2);
    for (var key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('aaza', 'zzaa'));