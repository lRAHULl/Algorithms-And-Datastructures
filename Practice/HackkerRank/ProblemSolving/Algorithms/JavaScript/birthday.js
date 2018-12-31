// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let result = {};
    for (let i = 0; i < ar.length; i++) {
        let candle = ar[i];
        if (result[candle] > 0) {
            result[candle]++;
        } else {
            result[candle] = 1;
        }
    }
    let tallCandle = String(ar.reduce((a, b) => Math.max(a, b)));
    return result[tallCandle];

}
console.log(`The Candles blown: ${birthdayCakeCandles([3, 2, 1, 3])}`)