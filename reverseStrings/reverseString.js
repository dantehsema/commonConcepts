/*

1. Write a function that takes a string as an input and returns a new string
in reverse order 

Start by writing in plain english the list of steps your function needs to perform 	
in order to make your function run

***BONUS
	create your function without using the built in reverse function. 

*/

/*
list of steps
1 i need to split each character in the string
then i need to reverse the array
then i will now join the array back to one string.
*/

function reverseString(str){
	return str.split('').reverse().join('');
}

function reverseString2(str){
	let stringSplit = [];
	let stringReverse = [];
	stringSplit = str.split('');
	for(let i=stringSplit.length-1; i>=0; i--){
		stringReverse.push(stringSplit[i]);
	}
	return stringReverse.join('');
}