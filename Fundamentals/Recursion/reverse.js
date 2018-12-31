function reverse(str) {
    str = str.toLowerCase();
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('Rahul'));