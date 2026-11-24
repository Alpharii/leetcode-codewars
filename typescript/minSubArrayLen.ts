// 209. Minimum Size Subarray Sum
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

function minSubArrayLen(target: number, nums: number[]): number {
    let minWindowSize = Infinity
    let windowSum = 0
    let left = 0

    for(let right = 0; right<nums.length; right++){
        windowSum += nums[right]
        while(windowSum >= target){
            if(minWindowSize > right - left + 1){
                minWindowSize = right - left + 1
            }
            windowSum -= nums[left]
            left++
        }
    }

    if(minWindowSize === Infinity) return 0
    return minWindowSize
};

// console.log(minSubArrayLen(15, [1,2,3,4,5]))
// console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
// console.log(minSubArrayLen(4, [1,4,4]))
console.log(minSubArrayLen(6, [10,2,3]))
// console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))


//gagal
//leetcode ajggggggggg
