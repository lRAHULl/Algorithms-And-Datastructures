function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    var str1 = String(num1);
    var str2 = String(num2);
    var obj1 = {};
    var obj2 = {}
    for (var letter of str1) {
        obj1[letter] ? obj1[letter] += 1 : obj1[letter] = 1;
    }
    for (var letter of str2) {
        obj2[letter] ? obj2[letter] += 1 : obj2[letter] = 1;
    }
    for (var key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true;
}


console.log(sameFrequency(1182, 2181));
