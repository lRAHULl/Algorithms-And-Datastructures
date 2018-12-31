function checkMagazine(magazine, note) {
    let magObj = {};
    let noteObj = {};
    let magArr = magazine.split(" ");
    let noteArr = note.split(" ");
    for (let mag of magArr) {
        magObj[mag] ? magObj[mag] += 1 : magObj[mag] = 1;
    }
    for (let note of noteArr) {
        noteObj[note] ? noteObj[note] += 1 : noteObj[note] = 1;
    }
    console.log(magObj, noteObj);
    for (let key in noteObj) {
        if (!magObj[key]) return "No";
        else if (noteObj[key] > magObj[key]) return "No";
    }
    return "Yes";
}

console.log(checkMagazine("ive got a lovely bunch of coconuts", "ive got bunch coconuts"));