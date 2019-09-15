// 5c. Write a function that returns all possible throws a player can make 
// in a 3 round game of rock paper scissors. 

// input
// rockPaperScissors()

// output
// [["rock", "rock", "rock"], ["rock", "rock", "paper"],
//     ["rock", "rock", "scissors"], ["rock", "paper", "rock"],
//              ...etc...
//      ]




/*
I need an array that hold the possible throws in a game of Rock Paper Scissors
We need an array to hold the current plays
we need an array to hold the outcomes
we need a variable to hold the current round

The base case
we need to iterate through the possible throws and push them to the current plays array
do this until rounds = 0 then push current plays array into the outcomes array
*/

let rounds = 3;
let outcomes = [];
let plays=['rock', 'paper', 'scissors'];


games = (rounds, playedSoFar) => {
	
	if(rounds === 0){
		outcomes.push(playedSoFar);
		return;
	}
	for(let i=0; i<plays.length; i++){
	let currentPlay = plays[i];
	games(rounds-1, playedSoFar.concat(currentPlay));
}

return outcomes;
}

let c = games(rounds,[]);

/*
round 1

	games 1
		playedsofar [rock]
	games 2
		playedSoFar [rock, rock]
	games 3
		playedSoFar [rock, rock, rock]
game 2
	round 1
		playedsofar [pa]
*/




// ************Extra Credit***************

// Make your function return answers for any number of rounds

// input 
// rockPaperScissors(5)

// output
// [["rock", "rock", "rock", "paper", "scissors"], 
// 	["rock", "rock", "paper", "rock", "scissors"],
//     ["rock", "rock", "scissors", "paper", "scissors"], 
//     ["rock", "paper", "rock", "paper", "scissors"],
//              ...etc...
//      ]


//      r, p, s 
	
	



//      r, r, r

//      p, p, p 

//      s, s, s

		
// 	r, r , p

// 	r, r, s

// 	r, p, p


// 	p

// 	p

// 	p

// 	s

// 	s

// 	s

