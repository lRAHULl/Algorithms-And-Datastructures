/**
Time Complexity
===============
Best Case: O(1)
Average Case: O(n)
Worst Case: O(n)
 */

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1;
}

console.log(linearSearch([55,67,89,00], 89));
console.log(linearSearch([1223, 10], 9));