n = int(input())
for i in range(n):
    size = int(input())
    inp =  input().split()
    arr = [int(x) for x in inp]    
    
    a = 0
    b = 0
    for i in range(1,len(arr)):
        curr = arr[i]
        prev = arr[i - 1]
        newA = max(a + abs(curr - prev), b + (curr - 1))
        newB = max(a + abs(prev - 1), b)
        a = newA
        b = newB
        
    res = max(a, b)
    print(res)