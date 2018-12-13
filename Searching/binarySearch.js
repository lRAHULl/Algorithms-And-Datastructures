/**
Time Complexity
===============
Best Case: O(1)
Average Case: O(log n)
Worst Case: O(log n)
Requirements: Needs a Sortes Array
 */

// function binarySearch(arr, val) {
//     let left = 0;
//     let right = arr.length - 1;
//     middle = Math.floor((left + right) / 2);
//     console.log(left, middle, right);
//     while (left <= right && arr[middle] !== val) {
//         if (val < arr[middle]) {
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }
//         middle = Math.floor((left + right) / 2);
//     }
//     if (val === arr[middle]) return middle;
//     return -1;
// }

function binarySearch(arr, val) {
    // Short Hand Version
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== val && left <= right) {
        if (val < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === val ? middle : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9, 10], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)); // 8