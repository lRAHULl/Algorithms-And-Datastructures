function designerPdfViewer(h, word) {
    let a = 'abcdefghijklmnopqrstuvwxyz';
    let obj = {};
    let i = 0;
    for (let key of a) {
        obj[key] = h[i];
        i++;
    }
    let arr = []
    for (let char of word) {
        arr.push(obj[char])
    }
    let l = arr.length;
    let max = Math.max(...arr);
    return l * max;
}

console.log(designerPdfViewer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, ], 'abc'));