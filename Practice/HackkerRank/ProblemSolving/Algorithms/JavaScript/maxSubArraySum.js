const maxSubArraySum = (arr, num) => {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}


const maxSubArraySumTwo = (arr, num) => {
    if (num > arr.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        // if (tempSum > maxSum) {
        //     maxSum = tempSum;
        // }
         tempSum > maxSum ? maxSum = tempSum : tempSum;
    }
    return maxSum;
}

console.log(maxSubArraySumTwo([1, 2, 3, 4, 5, 4, 1, 2], 4));