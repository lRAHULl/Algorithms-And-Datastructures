/**
 * Find whether the elements in array2 are the square of values in array1 and same number of similar elements
 */

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}


function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    obj1 = {}
    obj2 = {}
    for (var element of arr1) {
        obj1[element] = obj1[element] + 1 || 1;
    }
    for (var element of arr2) {
        obj2[element] = obj2[element] + 1 || 1;
    }
    console.log(obj1);
    console.log(obj2);
    for (var key in obj1) {
        // key validation
        if (!(key ** 2 in obj2)) {
            return false;
        }
        // value validation.
        if (obj2[key ** 2] !== obj1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 2], [1, 4, 4]));
console.log(same2([5, 1, 2, 2], [20, 1, 4, 4]));