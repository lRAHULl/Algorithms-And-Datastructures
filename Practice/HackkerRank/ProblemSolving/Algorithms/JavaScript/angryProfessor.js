function angryProfessor(k, a) {
    a = a.filter(i => i <= 0);
    if (a.length >= k) {
        return "NOT CANCELLED";
    }
    return "CANCELLED";
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));