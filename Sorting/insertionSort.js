/**
Time Complexity
===============
Best Case: O(n)

Average Case: O(n ^ 2)

Worst Case: O(n ^ 2)

Space Complexity => O(1)

Builts up the sorted array by gradually creating the larger half by inserting in the correct place which is always sorted. Its an olline algorithm because one side (left) is always sorted.
 */

function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([100, 56, 49, 50, 56, 2, 3, 5, 1, -16, 0, 6, 7, 101]));