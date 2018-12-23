boundary = (10**9)+7


def matMul(mat1, mat2):
    t_mod = (boundary)
    return [((mat1[0]*mat2[0])+(mat1[1]*mat2[2])) % t_mod, ((mat1[0]*mat2[1])+(mat1[1]*mat2[3])) % t_mod,
            ((mat1[2]*mat2[0])+(mat1[3]*mat2[2])) % t_mod, ((mat1[2]*mat2[1])+(mat1[3]*mat2[3])) % t_mod]


def matPower(mat, n):
    mulMat = [1, 1, 1, 0]
    while n:
        if n & 1:
            mulMat = matMul(mulMat, mat)
        mat = matMul(mat, mat)
        n >>= 1
    return mulMat


def findingFibanocci():
    """
    This is the Linear Algebric way of finding factorial.

    (Reference)[http://en.wikipedia.org/wiki/Fibonacci_number#Matrix_form]

    Its Just about MatrixMultiplication([0 1 1 1] ^ Power , [a, b])

    I have done the MatrixMultiplication in the matMul() function, and calculated the Power in matPower() function.
    """
    inp = input()
    while inp > 0:
        inp_func = raw_input().strip().split(' ')
        f0, f1, n = map(int, inp_func)
        mat = [1, 1, 1, 0]
        mat = matPower(mat, n-1)
        print((mat[2]*f1)+(mat[3]*f0)) % (boundary)
        inp -= 1


findingFibanocci()
