let reversed;
function tryingReversals(str){
	let strSplit = str.split('');
	console.log('here is the string split:', strSplit);
	let strReverse = strSplit.reverse();
	console.log('here is string in array as its reversed:', strReverse);
	let strJoin = strReverse.join('');
	return strJoin;
}


function reverseString(str){
	let newStr = str.split('').reverse().join('');
	return newStr;
}


function findLongestWordLength(str) {
	let stringSplit = str.split(' ');
	let lengths = [];
	console.log('Here is the string in ArrayForm:',stringSplit);
	for(let i = 0; i<stringSplit.length; i++){
		lengths.push(stringSplit[i].length);
		console.log('lengths in a string:', lengths);
	}

  return Math.max(...lengths);

}


function largestOfFour(arr) {
  // You can do this!
  let arrFlat = arr.flat();
 // console.log('Here is your flat arr:',arrFlat);
  let arrMax = Math.max(...arrFlat);
 // console.log('Her is the maximum number in ArrFlat:', arrMax);
  for(let i=0; i<arr.length; i++){
  //		console.log('Is my for Loop working:',arr[i])
  	if(arr[i].indexOf(arrMax) >= 0){
  //		console.log('here is the array with the maximum #:', arr[i]);
		return arr[i];
  	}
  
  }
 
}

 
 /*
first we usr arr.flat to make your initial array 1 array.
then we now find Math.max of your newArray and put max in its own variable.
then we iterate through every array in your arr using a for loop
then we now find if your max number is in any of the arrays so arr[i].indexOf(maxVariable)
If it exist in that array, return that array(arr[i]);
 */



function largestOfFour1(arr) {
  // You can do this!
  let maxArr = [];
  for(let i=0; i<arr.length; i++){
  	maxArr.push(Math.max(...arr[i]));
  	}
  return maxArr;
  }
 
//This returns all max numbers in 1 array






function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let ending = str.substring(str.length-target.length, str.length);
  if(ending === target){
    return true;
  }else{
    return false;
  }
}

 confirmEnding("Bastian", "n");

//or

function confirmEnding1(str, target){
  let check = str.slice(str.length -target.length) === target;
  return check;
}

  confirmEnding1("Bastian", "n");




//checks if the end of a string marches a target and returns true or false







//Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<=0){
    return '';
  }else{
    return str + repeatStringNumTimes(str, num-1);
  }
}

//or

function repeatStringNumTimes1(str, num){
  let repeat='';
  for(let i=0; i<num; i++){
      repeat += str;
    
  }
  return repeat;
}

/*
i would create a for loop to iterate from 0 to num 
then i will check if num is <= 0 the return blank space
else r
*/



//truncate a string
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num === str.length){
   return str;
  }else{
   return str.slice(0,num) + '...';
  }

}









//return value of function if true or undefined if false
function findElement(arr, func) {
 let num;
 for(let i=0; i<arr.length; i++){
  num = arr[i];
  console.log('items in arr[i]:', num);
  console.log('This is num:', num);
  if(func == true){
    return true;
  }
  }
 }
