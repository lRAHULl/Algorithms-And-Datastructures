#include <stdio.h>

int find_nth_term(int n, int a, int b, int c) {
  //Write your code here.
  if (n == a) {
      return a;
  } 
  if (n == b) {
      return b;
  }
  if (n == c) {
      return c;
  }
  return find_nth_term(n - 1, a, b, c);
}

int main() {
    int n, a, b, c;
  
    scanf("%d %d %d %d", &n, &a, &b, &c);
    int ans = find_nth_term(n, a, b, c);
    printf("%d", ans); 
    return 0;
}
