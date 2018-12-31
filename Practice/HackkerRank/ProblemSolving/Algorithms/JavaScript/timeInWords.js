function timeInWords(h, m) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine"
    ];
    if (m === 00) {
        return `${numbers[h]} o' clock`;
    } else if (m <= 30) {
        if (m === 15) return `quarter past ${numbers[h]}`;
        if (m === 30) return `half past ${numbers[h]}`;
        if (m === 01) return `${numbers[m]} minute past ${numbers[h]}`;
        return `${numbers[m]} minutes past ${numbers[h]}`;
    } else {
        if (m === 45) return `quarter to ${numbers[h + 1]}`;
        return `${numbers[60 - m]} minutes to ${numbers[h + 1]}`;
    }
}

console.log(timeInWords(1, 1));