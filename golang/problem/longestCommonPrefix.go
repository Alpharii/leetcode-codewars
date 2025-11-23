// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

package problem

func LongestCommonPrefix(strs []string) string {
	common := ""

	shortest := len(strs[0])
	for _, val := range strs {
		if(len(val) < shortest){
			shortest = len(val)
		}
	}

	for i:= 0; i<shortest; i++{
		isValid := true
		char := strs[0][i]

		for j:=0; j<len(strs); j++{
			if(strs[j][i] != char){
				isValid = false
				break
			}
		}

		if(isValid){
			common += string(char)
		} else {
			break
		}
	}

	return common
}
