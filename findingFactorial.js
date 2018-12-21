function solve(a, b, n) {
  let arr = [a, b];
  for (let i = 2; i <= n; i++) {
    arr[2] = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = arr[2];
  }
  return arr[1];
}

console.log(solve(9, 1, 7));
