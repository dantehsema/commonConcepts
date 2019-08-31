// const factorial = function(num){
// 	if(num <= 1) {
// 		return 1;
// 	}else{
// 		return num * factorial(num-1);
// 	}
// }		

// factorial(4) (6*4) = 24
// factorial(4);
//          4 * factorial(4-1) = 3 
// factorial(3);
// 		3 * factorial(3-1)= 2  6
// factorial(2);
// 		2 * factorial(2-1)= 1 2
// factorial(1);
// 		return 1




//what is a fibinocci sequence
//	-a seriece of number where the next number is found by adding the previous 2 numbers

/*

Problem statement
write a function the returns the fibonocci sequence for a value of indexes
for example
fibonocci(6) //should output : [0, 1, 1, 2, 3, 5, 8]

0 1 1 2 3 5
 fibinocci (num)
 next number = previous number + 2nd previous
               (num-1) + (num-2)


Method for solving problems 

1. Define what you know about the problem

2. O-ICE

	O - Output: define what your function output

	I - Input: define what your function will input

	C - Constraints: anything that creates boundaries for the problem

	E - Edge Cases : e.g. the sequence can only be made with positive numbers 

	--------base case ==C-Constraints-In Fib-num has to be < 1 if numb is 1 or less return mum and 
									  end loop
	--------recursive case==c-Constraint- as long as num > 1 keep running recursive case
						    (num-2) ,(num-1). this gives you the previous 2 numbers
	--------input is 5
	--------output should be 5,3,2,1,1,0 == 0,1,1,2,3,5
	--I create a function that takes a number as a parameter
	--Write the base case
		-tests your fariable to see if it is true. if it is turn then it stops the function
		-if it is false is moves on to the recursive case
		-the base case here is "if(num<=1){return num}"
	create a variable to hold the value in the fibanocci sequence
	--write the recursive case
		-else{ return fibanocci(num-2) + fibanocci(num-1)}




Fibonacci
let fibonacci =>(num){

}


fibonacci(5);




reversal string
function that will return a rverse of a given string




Recursive arrays
flatten([1, 2, 3, 4])
let g = [1, [2], [3, [[4]]]];
g.flat(3)
-what .flat() does is it takes an array with multiple dimention and make it flat or one dimention. 
-And if you have multiple dimentions in your array you would count the different levels of nesting
 then use that number as a parameter in your .flat() built in function. for instance take this array
 [1, [2], [3, [[4]]]] , the 4 is inside of an array1 and that array is inside another array2 and 
 that array is inside another array3 that has 3 also inside of it and as you can see that is the the 
 base dimention where 1 is and 2 is. but you see that 2 is in 1 array and there is no other array 
 inside of it. so since the highest number of nesting is 3, then you pass the 3 into the .flat().
 so .flat(3);

flatten([1, 2, 3, 4])

function flatten(arr) {
  var result = []
  arr.forEach(function(element) {
  		
      if (!Array.isArray(element)) {
            result.push(element)    
      } else {
            result = result.concat(flatten(element))    
      }  
  })  
  return result
}

*/



