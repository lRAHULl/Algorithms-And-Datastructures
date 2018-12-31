/**
Time Complexity
===============
Best Case: O(nlog n)

Average Case: O(nlog n)

Worst Case: O(n ^ 2)

Space Complexity => O(log n)

Divides the array into single element arrays, merges them by sorting one step at a time.
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function pivot(arr, start = 0, end = 0) {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
        return arr;
    }
    let pivot = arr[start];
    let swapId = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapId++;
            swap(arr, swapId, i);
        }
    }
    swap(arr, start, swapId);
    // console.log(arr);
    return swapId;
}

console.log(quickSort([100, 56, 49, 50, 56, 2, 3, 5, 1, -16, 0, 6, 7, 101])); // 12.