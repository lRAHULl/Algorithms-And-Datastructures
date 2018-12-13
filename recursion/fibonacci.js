function fib(n) {
    // console.log(n);
    if (n <= 2) {
        return 1;
    }
    // console.log(n);
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(10))