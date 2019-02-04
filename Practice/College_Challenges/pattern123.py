n = int(input())

ea = []
oa = []
for i in range(n,0,-1):
    if i % 2 == 0:
        ea.append(i)
    else:
        oa.append(i)
arr = ea + oa[::-1]

for i in arr:
    print(i, end=" ")