var date = prompt('Enter the date','17:00');
do {
   data = prompt('Enter the date','17:00');
} while (isNaN(data));
var name = prompt('Enter the name','Petro');

var city = prompt('Enter the city','Milan');

alert(name + ' has a meeting ' + date +  ' somewhere in ' + city + '.');

