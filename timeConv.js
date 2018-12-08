function timeConversion(s) {
    /*
     * Write your code here.
     */
    if (s.search('12') === 0 && s.search('AM') > 0) {
        s = s.slice(0, 8);
        s = s.split(':');
        s[0] = '00';
        s = s.join(':');
        return s;
    } else if (s.search('PM') < 0 || s.search('12') === 0) {
        return s.slice(0, 8);
    } else {
        s = s.slice(0, 8);
        s = s.split(':');
        let x = parseInt(s[0], 10) + 12;
        s[0] = String(x);
        s = s.join(':');
        return s;
    }

}
console.log(timeConversion('12:20:45PM'))