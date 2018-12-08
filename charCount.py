def charCount(str):
	result = {}
	for i in range(len(str)):
		char = str[i]
		if result[char] > 0:
			result[char] += 1
		else:
			result[char] = 1
	return result

charCount('Hello!')