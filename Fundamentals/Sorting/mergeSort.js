/**
Time Complexity
===============
Best Case: O(nlog n)

Average Case: O(nlog n)

Worst Case: O(nlog n)

Space Complexity => O(n)

Divides the array into single element arrays, merges them by sorting one step at a time.
 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

function merge(left, right) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArr.push(left[i]);
            i++;
        } else {
            mergedArr.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        mergedArr.push(left[i]);
        i++;
    }
    while (j < right.length) {
        mergedArr.push(right[j]);
        j++;
    }
    return mergedArr;
}

console.log(mergeSort([2, 4, 6, 3, 2, 5, 76, 88]));