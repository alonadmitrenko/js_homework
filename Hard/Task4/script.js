var arr = [2,2,4,5,6,7,7];
var sorted_arr = arr.slice().sort();
var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (!(results.includes(sorted_arr[i]))) {
        results.push(sorted_arr[i]);
    }
}
console.log(results);

