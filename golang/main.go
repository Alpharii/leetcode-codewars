package main

import (
	"codewars-golang/problem"
	"fmt"
)

func main(){
	fmt.Println(problem.Rps("rock", "scissors"))
	fmt.Println(problem.Rps("papper", "rock"))
	fmt.Println(problem.Rps("scissors", "papper"))
	fmt.Println(problem.Rps("rock", "papper"))
	fmt.Println(problem.Rps("papper", "scissors"))
	fmt.Println(problem.Rps("scissors", "rock"))
	fmt.Println(problem.Rps("rock", "rock"))
}