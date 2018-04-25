while(true) {
var date = prompt('Enter the date','today 17:00');
var name = prompt ('Enter the name','Petro');
var city = prompt('Enter the city','Milan');
var regExp_Name_City = /\d/;
	if (!regExp_Name_City.test(name) || !regExp_Name_City.test(city)) {
		alert("Try again");
	} else {
		alert(name + ' has a meeting ' + date +  ' somewhere in ' + city + '.');
		break;
	}
}
