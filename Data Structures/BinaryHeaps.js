function odd2(arr) {
  let obj = {};
  for (let x of arr) {
    obj[x] ? (obj[x] += 1) : (obj[x] = 1);
  }
  for (let x in obj) {
    if (obj[x] % 2 !== 0) {
      console.log(x);
    }
  }
  console.log(0);
}

odd2([4, 4, 8, 8, 23]);
