import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

/*
    ***COMMENT: FOR SOME REASON, ARRAY OPERATIONS ARE TAKING MORE TIME, SO I DID IN JAVA

    def shortPalindrome(s):
        ones = [0 for x in range(26)]
        twos = [0 for x in range(26 * 26)]
        threes = [0 for x in range(26)]
        n = len(s)
        res = 0
        boundary = 1000000007
        for i in range(n):
            idx = ord(s[i]) - ord('a');
            res = (res + threes[idx]) % (boundary)

            for j in range(26):
                threes[j] = (threes[j]+twos[j*26+idx]) % (boundary)

            for j in range(26):
                twos[j*26+idx] = (twos[j*26+idx]+ones[j]) % (boundary)

            ones[idx] = (ones[idx]+1) % (1000000007)

        return res % boundary
*/

public class Solution {

    // Complete the shortPalindrome function below.
    static int shortPalindrome(String s) {
        long[] ones = new long[26];
        long[] twos = new long[26 * 26];
        long[] threes = new long[26];
        int n = s.length();
        long ret = 0;

        for(int i=0;i<n;i++)
        {
            int idx = s.charAt(i) - 'a';
            ret = (ret + threes[idx])%(1000000007);

            for(int j=0;j<26;j++)
                threes[j]=(threes[j]+twos[j*26+idx])%((1000000007));

            for(int j=0;j<26;j++)
                twos[j*26+idx]=(twos[j*26+idx]+ones[j])%(1000000007);

            ones[idx]=(ones[idx]+1)%(1000000007);
        }
        return (int)((long)ret % (1000000007));
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scanner.nextLine();

        int result = shortPalindrome(s);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
