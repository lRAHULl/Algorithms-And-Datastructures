/**
Time Complexity
===============
Best Case: O(n ^ 2)

Average Case: O(n ^ 2)

Worst Case: O(n ^ 2)

Space Complexity => O(1)

Select the minimum values, and swap with the started number.
 */

// Using a minimum variable.
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i !== min) swap(arr, i, min);
    }
    return arr;
}

function selectionSortTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) swap(arr, i, j);
        }
    }
    return arr;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(selectionSort([100, 56, 49, 50, 56, 2, 3, 5, 1, -16, 0, 6, 7, 101]));
console.log(selectionSortTwo([100, 56, 49, 50, 56, 2, 3, 5, 1, -16, 0, 6, 7, 101]));