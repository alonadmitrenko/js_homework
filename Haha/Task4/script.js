var date;
if (typeof date !== 'number') {
  return prompt('Enter the date again','17:00'); 
} else {
  prompt('Enter the date','today at 17:00');
}
var name = prompt('Enter the name','Petro');

var city = prompt('Enter the city','Milan');

alert(name + ' has a meeting ' + date +  ' somewhere in ' + city + '.');


// var date = prompt('Enter the date','today at 17:00');
// var name = prompt('Enter the name','Petro');
// var city = prompt('Enter the city','Milan');

// if (typeof date !== 'number') {
//   return false;
// } prompt('Enter the date again','17:00');

// if (typeof name !== 'string') {
//   return false;
// } prompt('Enter the name again','Petro');

// if (typeof city !== 'string') {
//   return false;
// } prompt('Enter the city again','Milan');

// alert(name + ' has a meeting ' + date +  ' somewhere in ' + city + '.');
