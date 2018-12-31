function power(b, e){
    if (e === 0) {
        // console.log(e);
        return 1;
    }
    // console.log(b * power(b, e -1));
    return b * power(b, e - 1)
}

console.log(power(5, 2));