// function palindrome(s) {
//   let rev = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     rev += s[i];
//   }
//   if (s === rev) return true;
//   return false;
// }

// function possibileSP(s) {
//   let arr = [];
//   for (let i = 0; i <= s.length - 4; i++) {
//     let temp = "";
//     for (let j = i; j < i + 4; j++) {
//       temp += s[j];
//     }
//     arr.push(temp);
//   }
//   return arr;
// }

// function shortPalindrome(s) {
//     let arr = possibileSP(s);
//     count = 0;
//     for (let i = 0; i < s.length; i++) {

//     }
// }

// console.log(possibileSP("RahulP"));

// function ascii(s) {
//     return s.charCodeAt(0);
// }

// function shortPalindrome(str) {
//     var arr = new Array(26);
//     // create 2D
//     for (i = 0; i < arr.length; i++) {
//         arr[i] = new Array(26);
//     }
//     // create 3D
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr[0].length; j++) {
//             arr[i][j] = new Array(4);
//         }
//     }

//     for (let k of str) {
//         let i = ascii(k) - ascii('a');
//         for (let j = 0; j < 26; j++) {
//             arr[i][j][3] += arr[i][j][2] % 1000000007;
//             arr[j][i][2] += arr[j][i][1] % 1000000007;
//             arr[j][i][1] += arr[j][i][0] % 1000000007;
//             arr[i][j][0]++;
//         }
//     }

//     let count = 0;

//     for (let i = 0; i < 26; i++) {
//         for (let j = 0; j < 26; j++) {
//             count += arr[i][j][3];
//         }
//     }
// }

// console.log(shortPalindrome('kkkkkkz'));

function shortPalindrome(s) {
    let ones = new Array(26);
    let twos = new Array(26 * 26);
    let threes = new Array(26);
    let n = s.length;
    let res = 0;
    let boundary = 1000000007;
    for (let i = 0; i < n - 1; i++) {
        let char = s[i];
        console.log(char)
        let idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        console.log(char.charCodeAt(0) - 'a'.charCodeAt(0))
        res = (res + threes[idx]) % (boundary);

        for (let j = 0; j < 26; j++) {
            threes[j] = (threes[j] + twos[j * 26 + idx]) % ((boundary));
        }


        for (let j = 0; j < 26; j++) {
            twos[j * 26 + idx] = (twos[j * 26 + idx] + ones[j]) % (boundary);
        }

        ones[idx] = (ones[idx] + 1) % (boundary);
    }
    return res % boundary;

}

console.log(shortPalindrome('abbaab'));