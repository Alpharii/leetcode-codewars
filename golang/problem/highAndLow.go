// 7 kyu
// Highest and Lowest

// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and
// lowest number.

// Examples
// HighAndLow("1 2 3 4 5") // return "5 1"
// HighAndLow("1 2 -3 4 5") // return "5 -3"
// HighAndLow("1 9 3 4 -5") // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

package problem

import (
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	parts := strings.Split(in, " ")
	first, err := strconv.Atoi(parts[0])
	if err != nil {
		return ""
	}

	highest, lowest := first, first

	for _, s := range parts[1:] {
		num, _ := strconv.Atoi(s)
		if num > highest {
			highest = num
		}
		if num < lowest {
			lowest = num
		} 
	}

	return strconv.Itoa(highest) + " " + strconv.Itoa(lowest)
}