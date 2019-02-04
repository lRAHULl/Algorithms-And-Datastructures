#include <bits/stdc++.h>
using namespace std;

int main()
{
    int num;
    cin >> num;

    for (int i = 0; i < num; i++)
    {
        string str;
        cin >> str;
        int n = str.length();
        int res = 0;
        for (int i = 0; i < n / 2; i++)
        {
            res += abs(str[i] - str[n - i - 1]);
        }
        cout << res << "\n";
    }
    return 0;
}