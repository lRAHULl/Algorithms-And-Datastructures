# FUN FACT: FROM THIS CHALLENGE I FOUND THAT **JAVA IS WAY FASTER THAN PYTHON :-)**  -lRAHULl
# THANKS FOR CHECKING, NEVER CHEAT YOURSELF, THIS CODE IS NOT FOR PUBLIC USE. haha-- just kidding.
def shortPalindrome(s):
    """
    Time Complexity(both Best and Worst): O(n ^ 2)   
    -- I tried, but I couldn't do any better in the given time. :-( 
    Space Complexity: O(n ^ 2)
    """
    ones = [0] * 26  # No. of alphabets = 26, so put them in the right position.
    twos = [[0] * 26 for _ in range(26)]
    threes = [0] * 26
    res = 0
    boundary = 1000000007 # To reduce the complexity of the answer.
    for i in s:
        # 'ord' is a function used to find ascii value.
        idx = ord(i) - ord('a')   # I subtracted it with 'a' to find which number it is between 1 - 26.
        
        res = (res + threes[idx]) % (boundary)
        
        
        for j in range(26):
            threes[j] += twos[j][idx]
            twos[j][idx] += ones[j]
        
        ones[idx] += 1
        
    return res % boundary
arr = []
arr.joi

print(shortPalindrome('kkkkkkz'))
