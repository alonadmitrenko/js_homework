function bringStarsToScreen(StarsNumber) {
    for (var i = 1; i <= StarsNumber; i++) {
        var starsbring = '';
            for (var j = 0; j < i; j++) {
                starsbring = starsbring + '*';
            }
            console.log(starsbring);
    }
}

bringStarsToScreen(5);