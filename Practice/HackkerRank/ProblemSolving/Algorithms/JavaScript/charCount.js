function charCount(str) {
	// Declare an object to return at end.
	var result = {};
	// loop over the input str .
	for (let i = 0; i < str.length; i++) {
		char = str[i].toLowerCase();
		// remove the non-alphanumeric characters.
		notChar = " !@#$%^&*()_+}{:?><~``[];',./?\|";
		for (let j = 0; j < notChar.length; j++) {
			if (char === notChar[j]) {
				char = null;
			}
		}
		// if the chars are keys inside our object increment it by 1.
		// if (result[char] > 0) {
		// 	result[char]++;
		// } else {
			// if not initialize the key to 1.
		// 	result[char] = 1;
		// }
		result[char] = ++result[char] || 1
	}
	delete(result[null])
	return result
}

console.log(charCount("The PIN number is 1234"));