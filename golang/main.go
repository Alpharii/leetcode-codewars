package main

import (
	"codewars-golang/problem"
	"fmt"
)

func main(){
	fmt.Println(problem.LongestCommonPrefix([]string{"flower","flow","flight"}))
	fmt.Println(problem.LongestCommonPrefix([]string{"dog","racecar","car"}))
	fmt.Println(problem.LongestCommonPrefix([]string{"cir","car"}))
}