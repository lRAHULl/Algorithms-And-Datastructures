#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    char *s;
    s = malloc(1024 * sizeof(char));
    scanf("%[^\n]", s);
    s = realloc(s, strlen(s) + 1);
    //Write your logic to print the tokens of the sentence here.
    for (char *c = s; *c != NULL; c++) {  
        // c -> pointer; *c -> pointes at element of s
        if (*c == ' ') {  // ' ' -> only for single charcters.
            *c = '\n';
        }
    }
    printf("%s", s);
    return 0;
}