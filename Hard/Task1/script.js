function recursionNumber(n) {
    if (n == 0) {
        console.log(0);
        return;
    } else {
        console.log(n);
        recursionNumber(n - 1);
    }
}
recursionNumber(20);