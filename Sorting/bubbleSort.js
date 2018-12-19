/**
Time Complexity
===============
Best Case: O(n)

Average Case: O(n ^ 2)

Worst Case: O(n ^ 2)

Space Complexity => O(1)

Large items in an array, bubble up at the top.
 */

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                // If the array is fully sorted, no Swaps take place in the corresponding iteration, taking it to an advantage, we can break the loop after on iteration.
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(bubbleSort([100, 56, 49, 50, 56, 2, 3, 5, 1, -16, 0, 6, 7]));