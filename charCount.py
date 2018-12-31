def charCount(str):
	d = {i:str.count(i) for i in str}
	print(d)

charCount('Hello!')