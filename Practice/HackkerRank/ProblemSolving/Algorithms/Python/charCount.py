def charCount(s):
	d = {i:s.count(i) for i in s}
	for i in d.values():
		print(i)

charCount('Hello!')