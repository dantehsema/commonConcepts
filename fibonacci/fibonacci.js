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
	let fibArr = [];
	if(num <= 1){
		return num;
	}else{
		console.log('recusive case', num)
		
		fibonacci(num-2) + fibonacci(num - 1);
		fibArr.push(num)
		

	}

	console.log(fibArr);
	return fibArr;
}




/*
Why fibonacci should return num instead of 1:

because sometimes fibonnaci can return a 0 and you do not want the 0s to be converted to 1s. 
that is where you end up having more fibonacci numbers than intended.
Also a fibonacci of zero does not exist. So if you make it return 1 instead of num you give a value
to the fibonacci of zero.
*/