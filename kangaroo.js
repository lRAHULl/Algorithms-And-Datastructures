function kangaroo(x1, v1, x2, v2) {
  let arr1 = [];
  let arr2 = [];
  let count = 0;
  for (let i = 0; i < 10000; i++) {
    arr1.push(x1 + v1 * i);
    arr2.push(x2 + v2 * i);
  }
  for (let i = 0; i < 10000; i++) {
    if (arr1[i] === arr2[i]) {
      count += 1;
    }
  }
  if (count > 0) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(kangaroo(0, 2, 5, 3));
