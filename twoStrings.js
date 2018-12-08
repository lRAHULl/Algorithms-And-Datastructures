function twoStrings(str1, str2) {
    let obj1 = {}
    let obj2 = {}
    for (var char of str1) {
        obj1[char] = ++obj1[char] || 1;
    }
    for (var char of str2) {
        obj2[char] = ++obj2[char] || 1;
    }
    for (var key in obj1) {
        if (key in obj2) {
            return 'YES';
        }
    }
    return 'NO';
}

console.log(twoStrings('hackerrankcommunity', 'cdecdecdecde'))