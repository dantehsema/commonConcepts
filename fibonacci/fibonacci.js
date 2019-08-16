/*
Write a function that returns an array for the fibonnaci sequence of a given size

For example 

INPUT 			OUTPUT
fibonacci(0)	//[]
fibonacci(1)	//[1]
fibonacci(2)	//[1, 1]
fibonacci(6)	//[1,1,2,3,5,8]

Start by writing in plain english the list of steps your function needs to perform 	
in order to make your function run 

***Bonus:
	Describe what happens for the input of -1: 
	fibonacci(-1) 

	Results - 


*/

/*
First I would write the base case
	- check if num is < or = 1 if so return 1 because num cannot be less than 1
	- if num is < 1 the proceed to recursive case
	- edge case
		- when there is a fibonacci of 0 you return 1
		- when there is a fibonacci of 1 you return 1

then I would write the recursive case
	- nor I would add fib of previous 2 numbers 
	-so we return fib(num-2) + fib(num-1)
*/

function fibonacci(num){
	if(num <= 0){
		return '';
	}else if(num = 1){
		return 1;
	}else{
		console.log(num)
		return fibonacci(num-2) + fibonacci(num - 1);
	}
}