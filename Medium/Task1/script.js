var number = 32243 ;

function getReversedNum(number) {
    var result = 0;
    while (number) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}
console.log(getReversedNum(number));