const VAL = 26;
function currencyConverter(number, currency) {
    if (currency == 'UAH') {
        return number * VAL;
    } else if (currency == 'USD') {
        return number / VAL;
    } else {
         return 'We have a currency converter ONLY from USD to UAH and reverse.';
    }
}

console.log(currencyConverter(100, 'UAH'));
console.log(currencyConverter(2600, 'USD'));
console.log(currencyConverter(100));



