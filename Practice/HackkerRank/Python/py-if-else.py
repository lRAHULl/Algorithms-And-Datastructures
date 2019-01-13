# https://www.hackerrank.com/challenges/py-if-else/problem

N = int(input())

if N % 2 != 0:
    print('Weird')
elif N >= 2 and N <= 5:
    print('Not Weird')
elif N <= 20:
    print('Weird')
else:
    print('Not Weird')
