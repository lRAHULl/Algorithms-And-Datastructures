function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let lowerApple = s - a;
    let upperApple = t - a;
    let lowerOrange = s - b;
    let upperOrange = t - b;

    let appleCount = 0;
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] >= lowerApple && apples[i] <= upperApple) {
            appleCount += 1;
        }
    }
    let orangeCount = 0;
    for (let i = 0; i < oranges.length; i++) {
        if (oranges[i] >= lowerOrange && oranges[i] <= upperOrange) {
            orangeCount += 1;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 6], [-8, -4, -5]);