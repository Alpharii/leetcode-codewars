package main

import (
	"codewars-golang/problem"
	"fmt"
)

func main(){
	fmt.Println(problem.HighAndLow("1 2 3 4 5")) // "5 1"
	fmt.Println(problem.HighAndLow("1 2 -3 4 5")) // "5 -3"
	fmt.Println(problem.HighAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // "9 -5"
}