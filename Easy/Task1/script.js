function getOnlyPairNumbers(array) {
    var arrayForPair = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayForPair.push(array[i]);
        }
    }
    return arrayForPair;
}
    console.log(getOnlyPairNumbers([1, 5, 23, 4, 2, 5, 6]));