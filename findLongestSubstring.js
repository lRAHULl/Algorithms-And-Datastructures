function findLongestSubstring(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 0) {
        return 0;
    }
    let arr = [];
    let x = 0;
    // let y = 0;
    let count = 1;
    arr = [];
    arr.push(str[x])
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[x]) {
            if (!(str[i] in arr)) {
                 x++;
                 count++;
                 arr.push(str[x])
                 console.log(arr);
            }
        } else {
            return count;
        }
    }
    return count;
    // for (let char of str) {
    //     if (!(char in arr)) {
    //         arr.push(char);
    //         console.log(arr);
    //     } else {
    //         return arr.length;
    //     }
    // }
    // return arr.length;
}

console.log(findLongestSubstring('rithmschool'));