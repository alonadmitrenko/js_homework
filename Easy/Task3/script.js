function averageNumberofValues(array) {
    var sum = 0;
        for (var i = 0, j = array.length; i < j; i++) {
        sum = sum + array[i];
        }
        return (sum / array.length).toFixed(2);
}
    console.log(averageNumberofValues([1, 4, 2]));