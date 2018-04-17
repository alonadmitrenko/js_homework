function findHypotenuseSquare(firstCateche, secondCateche) {
    return firstCateche * firstCateche + secondCateche * secondCateche;
}
function findHypotenuse(firstCateche, secondCateche) {
    var hypotenuseSquare = findHypotenuseSquare(firstCateche, secondCateche);
    return Math.sqrt(hypotenuseSquare);
}

var result = findHypotenuse(8,9)
console.log(result)