// 424. Longest Repeating Character Replacement
// Medium
// Topics
// premium lock icon
// Companies
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

function characterReplacement(s: string, k: number): number {
    let longest = 0
    let left = 0
    const temp = new Array(26).fill(0)
    let maxFreq = 0

    for(let right = 0; right<s.length; right++){
        const index = s[right].charCodeAt(0) - 65
        temp[index]++
        maxFreq = Math.max(maxFreq, temp[index])
        while((right - left + 1 - maxFreq) > k){
            temp[s[left].charCodeAt(0) - 65]--
            left++
        }
        longest = Math.max(longest, (right - left + 1))
    }

    return longest
};

console.log(characterReplacement("AAAA", 0))

