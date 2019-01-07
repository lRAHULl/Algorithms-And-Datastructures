#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    char ch;
    char* s[100];
    char* sen[100]; 
    scanf("%c", &ch);
    printf("%c", ch);
    printf("\n");
    scanf("%s", s);
    printf("%s", s);
    printf("\n"); 
    scanf(" %[^\n]%*c", &sen);
    printf("%s", sen);
    return 0;
}