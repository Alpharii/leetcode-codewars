// 8 kyu
// Rock Paper Scissors!

// Rules of the "Rock, Paper, Scissors" game are:

// Rock beats Scissors,
// Scissors beat Paper,
// Paper beats Rock,
// Two identical moves are a draw.
// Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

// Examples:
// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"

package problem

func Rps(p1, p2 string) string {
	wins:= map [string]string{
		"rock": "scissors",
		"scissors": "paper",
		"paper": "rock",
	}

	if(p1 == p2){
		return "Draw!"
	} else {
		if(wins[p1] == p2){
			return "Player 1 won!"
		} else{
			return "Player 2 won!"
		}
	}
}
