#include <stdio.h>

int main()
{
  int arr[100], freq[100];
  int size, i, j, count;
  scanf("%d", &size);
  for (i = 0; i < size; i++)
  {
    scanf("%d", &arr[i]);
    freq[i] = -1;
  }

  for (i = 0; i < size; i++)
  {
    count = 1;
    for (j = i + 1; j < size; j++)
    {
      if (arr[i] == arr[j])
      {
        count++;
        freq[j] = 0;
      }
    }
    if (freq[i] != 0)
    {
      freq[i] = count;
    }
  }
  int max = freq[0];
  for (i = 1; i < size; i++)
  {
    if (freq[i] > max)
    {
      max = freq[i];
    }
  }
  int a[100];
  int n = 0;
  for (i = 0; i < size; i++)
  {
    if (freq[i] == max)
    {
      a[n] = arr[i];
      n++;
    }
  }

  int min = a[0];
  if (n > 0)
  {
    for (i = 1; i < n; i++)
    {
      if (a[n] < min)
      {
        min = a[i];
      }
    }
  }

  printf("%d", min);
  return 0;
}
