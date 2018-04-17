var array = [1, 92, -5, 25];

function returnMinAndMaxNumbers() {
    var min = array[0]; var max = array[0];

        for (i = 1; i < array.length; i++) {
             if (array[i] < min) {
                 min = array[i];
             }
             if (array[i] > max) {
                 max = array[i];
             }

    }
    console.log('min : ' + min, ' max : ' + max);
}

returnMinAndMaxNumbers();