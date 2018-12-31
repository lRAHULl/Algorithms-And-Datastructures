/**
 * Find whether the elements in array2 are the square of values in array1 and same number of similar elements
 */

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let element of arr1) {
        let correctIndex = arr2.indexOf(element ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}


const sameTwo = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    obj1 = {};
    obj2 = {};
    for (let element of arr1) {
        obj1[element] ? obj1[element]++ : obj1[element] = 1;
    }
    for (let element of arr2) {
        obj2[element] = obj2[element] + 1 || 1;
    }
    console.log(obj1);
    console.log(obj2);
    for (let key in obj1) {
        if (!(key ** 2 in obj2)) {
            return false;
        }
        if (obj1[key] !== obj2[key ** 2]) {
            return false;
        }
    }

    return true;
}

console.log(sameTwo([1, 2, 2], [1, 4, 4]));
console.log(sameTwo([5, 1, 2, 2], [25, 1, 1, 4]));