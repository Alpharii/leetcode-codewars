package main

import (
	"codewars-golang/problem"
	"fmt"
)

func main(){
	// fmt.Println(problem.BubblesortOnce([]int{9,7,5,3,1,2,4,6,8}), []int{7, 5, 3, 1, 2, 4, 6, 8, 9})
	fmt.Println(problem.BubblesortOnce([]int{2,4,1}), []int{2,1,4})
}