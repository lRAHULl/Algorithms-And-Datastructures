function charCount(str) {
	var result = {};
	for (let i = 0; i < str.length; i++) {
		char = str[i].toLowerCase();
		// notChar = " !@#$%^&*()_+}{:?><~``[];',./?\|";
		// for (let i = 0; i < notChar.length; i++) {
		// 	if (char === notChar[i]) {
		// 		char = null;
		// 	}
		// }
		if (result[char] > 0) {
			result[char]++;
		} else {
			result[char] = 1;
		}
	}
	delete(result[null])
	return result
}

console.log(charCount("The PIN number is 1234"));