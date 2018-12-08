def repeatedString(s, n):
    # x = len(s)
    # a = []
    # j = 0
    # i = 0
    # while i < n:
    #     if j < x:
    #         a.append(s[j])
    #         j += 1
    #         i += 1
    #     else:
    #         j = 0
    # count = 0
    # for i in range(n):
    #     if a[i] == 'a':
    #         count += 1
    # print(a)
    # return count
    return s.count("a") * (n // len(s)) + s[:n % len(s)].count("a")


print(repeatedString('aba', 10))
