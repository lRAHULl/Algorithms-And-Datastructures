const sumZero = (arr) => {
    for (let i=0; i < arr.length; i++) {
        for (let j = i + 1;j<arr.length;j++){
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
    return false;
}

const sumZeroTwo = (arr) => {
    left = 0;
    right = arr.length - 1;
    while(left < right) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]];
        } else if (arr[left] + arr[right] > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, 0, 2, 2, 10]))