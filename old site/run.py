def checkSum(string):
	u_sum = 0
	for char in string:
		u_sum = u_sum + ord(char)
	print(str(u_sum % 10))
checkSum('dog')	
