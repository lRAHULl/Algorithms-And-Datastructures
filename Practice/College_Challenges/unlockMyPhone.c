
#include <stdio.h>
#include <math.h>

int main()
{
  int sizeofarray;
  scanf("%d", &sizeofarray);
  int a[sizeofarray];
  int flag = 1;
  for (int i = 0; i < sizeofarray; ++i)
  {
    scanf("%d", &a[i]);
  }
  for (int i = 0; i < sizeofarray - 1; i++)
  {
    if (abs(a[i] - a[i + 1]) != 1)
    {
      flag = 0;
    }
  }
  if (flag == 1)
  {
    printf("%s", "YES");
  }
  else
  {
    printf("%s", "NO");
  }
}