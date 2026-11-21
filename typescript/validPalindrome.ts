// Level 2 — Array & Two Pointers
// Selanjutnya

// Materi	Soal
// Greedy	Best Time to Buy and Sell Stock
// Two Pointers	Valid Palindrome
// Two Pointers	Two Sum II
// Array	Product of Array Except Self

// 125. Valid Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input:
// const s: string = "A man, a plan, a canal: Panama";

// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input:
// const s: string = "race a car";

// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input:
// const s: string = " ";

// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


function isPalindrome(s: string): boolean {
    s = s.toLowerCase()
    let left = 0
    let right = s.length - 1

    while(left < right){
        console.log(s[left], s[right])
        if(!/^[a-z0-9]+$/.test(s[left])){
            left++
            continue
        }
        if(!/^[a-z0-9]+$/.test(s[right])){
            right--
            continue
        }

        if(s[left] !== s[right]){
            return false
        }

        left++
        right--
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))