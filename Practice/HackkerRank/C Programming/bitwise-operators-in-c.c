#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
//Complete the following function.


void calculate_the_maximum(int n, int k) {
    int tempOr = 0;
    int tempAnd = 0;
    int tempXor = 0;
    int or;
    int and;
    int xor;
    //Write your code here.
    //   printf("%d\n", n & k);
    //   printf("%d\n", n | k);
    //   printf("%d", n ^ k);
    for (int i = 1; i <= n - 1; i++) {
        for (int j = i + 1; j <= n; j++) {
            or = i | j;
            and = i & j;
            xor = i ^ j;
            if (or > tempOr) {
              if (or < k) {
                tempOr = or;
              }
            }
            if (and > tempAnd) {
              if (and < k) {
                tempAnd = and ;
              }
            }
            if (xor >= tempXor) {
              if (xor < k) {
                tempXor = xor ;
              }
            }
        }
    }
      printf("%d\n", tempAnd);
      printf("%d\n", tempOr);
      printf("%d", tempXor);
}

int main() {
    int n, k;
  
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);
    return 0;
}
