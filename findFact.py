# def solve(a, b, n):
#     arr = []
#     arr.append(a)
#     arr.append(b)
#     for i in range(2, n):
#         arr.append(arr[i - 2] + arr[i - 1])
#     return arr[arr.length - 1]


# print(solve(509618737, 460201239, 229176339))


one = str(input())
two = str(input())
[n, d] = one.split(' ')
arr = two.split(' ')
print(d, n, arr)