#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>



int main() 
{
    int a, b;
    scanf("%d\n%d", &a, &b);
    
    char labels[11][6] = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    for (int i = a; i <= b; i++) {
        if (i >= 1 && i <= 9) {
            printf("%s\n", labels[i - 1]);
        }
        else if (i % 2 == 0) {
            printf("%s\n", "even");
        }
        else {
            printf("%s\n", "odd");
        }
    }
    return 0;

}
