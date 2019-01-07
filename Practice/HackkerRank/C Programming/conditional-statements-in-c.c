#include <stdio.h>

int main() {
  int n;
  scanf("%d", &n);
  char strings[11][6] = {"one", "two",   "three", "four", "five", "six", "seven", "eight", "nine"};
  if (n >= 1 && n <= 9)
    printf("%s", strings[n - 1]);
  else
    printf("Greater than 9");

  return 0;
}
