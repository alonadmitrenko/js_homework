function currencyConverter(quantity, currency) {
    if (currency == 'UAN') {
        return quantity * 25.95;
    } else if (currency == 'USD') {
        return quantity / 26.2;
    } else {
        return 'We have a currency converter ONLY from USD to UAH and reverse.';
    }
}
console.log(currencyConverter(100, 'UAN'));
console.log(currencyConverter(5000, 'USD'));
console.log(currencyConverter(500, 'EUR'));
console.log(currencyConverter(500));