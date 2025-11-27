// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

package problem


func FirstUniqChar(s string) int {
	freq := [256]int{}
	for i:= 0; i<len(s); i++{
		freq[s[i]]++
	}

	for i:=0; i<len(s); i++{
		if(freq[s[i]] == 1){
			return i
		}
	}
	return -1
}