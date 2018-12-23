// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0;
    while (s >= 0) {
        count++;
        s = s - p;
        p = Math.max(p - d, m);
    }
    return count - 1;
}

console.log(howManyGames(20, 3, 6, 80));