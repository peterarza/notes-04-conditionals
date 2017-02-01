/* Conditional statements are used in conjunction with basic and advanced operators to determine how truthful a statement is. */

// Declare a variable
var num =45;

/* Use a conditional statement to test num to see if it is equal to 45. */
if (num === 45) {
	document.write('<br> The number is 45.');
}else {
	document.write('<br> The number is NOT 45');

}
/* In addition conditions can also be used to check strings. */

var myString = 'Sally';

if(myString === 'Sally') {
	document.write('<br> Welcome home Sally.');

}else {
	document.write('<br> Intruder alert.');
}

/* You can eval 2 variables against each other.*/
var jenny = 19;
var henry = 20;

if(jenny === henry) {
	document.write('<br> Jenny and Henry are the same age.');
}else {
	document.write('<br> Jenny and Henry are not the same age.');
}

/* You can use operators such as && and || to check for the truthfulness of a statement. */

var username = true;
var password = true;

if(username && password === true) {
	document.write('<br> Access Granted');
}else if (username === true && password === false) {
	document.write('<br>Your password is wrong.');
}else if (username === false && password === true) {
	document.write('<br>Your username is wrong.');
}else {
	document.write('Access Denied.');
}













