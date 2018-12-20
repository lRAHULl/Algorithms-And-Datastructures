'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function leftRotation(n, d, arr) {
    // get `n` and `d` from input
    // const lines = input.split('\n');
    // const firstLine = lines[0].split(' ').map(Number);
    // let arr = lines[1].split(' ').map(Number);
    // const n = firstLine[0];
    // const d = firstLine[1];
    arr = arr.splice(0, n);
    for (let i = 0; i < d; i++) {
        let p = arr.shift();
        arr.push(p);
    }
    return arr.join(' ');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = leftRotation(n, d, a);

    ws.write(result);

    ws.end();
}