// function matMul(mat1, mat2) {
//   mod = 1000000009;
//   return [
//     (mat1[0] * mat2[0] + mat1[1] * mat2[2]) % mod,
//     (mat1[0] * mat2[1] + mat1[1] * mat2[3]) % mod,
//     (mat1[2] * mat2[0] + mat1[3] * mat2[2]) % mod,
//     (mat1[2] * mat2[1] + mat1[3] * mat2[3]) % mod
//   ];
// }

// n = 891913774;
// mat = [0, 1, 1, 1];
// a = 920881302;
// b = 970435252;
// temp = mat;
// for (let i = 0; i < n - 1; i++) {
//   res = matMul(temp, mat);
//   temp = res;
//   // console.log(res);
// }

// ans = (temp[0] * a + temp[1] * b) % 1000000009;
// console.log(ans);
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function matMul(mat1, mat2) {
  let mod = 1000000009;
  return [
    (mat1[0] * mat2[0] + mat1[1] * mat2[2]) % mod,
    (mat1[0] * mat2[1] + mat1[1] * mat2[3]) % mod,
    (mat1[2] * mat2[0] + mat1[3] * mat2[2]) % mod,
    (mat1[2] * mat2[1] + mat1[3] * mat2[3]) % mod
  ];
}

// Complete the solve function below.
function power(mat, n) {
  let matDup = [0, 1, 1, 1];
  while (n) {
    if (n & 1) {
      matDup = matMul(matDup, mat);
    }
    mat = matMul(mat, mat);
    n >>= 1;
  }
  return matDup;
}
// function solve(a, b, n) {
//     let mat = [0, 1, 1, 1];
//     let temp = mat;
//     for (let i = 0; i < n - 1; i++) {
//         let res = matMul(temp, mat);
//         temp = res
//     }
//     let ans = ((temp[0] * a) + (temp[1] * b)) % 1000000009;
//     return ans;

// }

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let t = parseInt(readLine(), 10);

  while (t > 0) {
    const abn = readLine().split(" ");

    const a = parseInt(abn[0], 10);

    const b = parseInt(abn[1], 10);

    const n = parseInt(abn[2], 10);

    let mat = [0, 1, 1, 1];

    mat = power(mat, n - 1);

    let result = (mat[0] * a + mat[1] * b) % 1000000009;

    ws.write(result + "\n");

    t = t - 1;
  }
  ws.end();
}
