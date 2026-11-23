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
    let window = 0
    let tempVal = 0

    for (let i = 0; i < nums.length; i++) {
        console.log('window',window, tempVal, nums[i])
        if(tempVal < target){
            tempVal += nums[i]
            window++
            console.log('temp +=',tempVal)

        }
        console.log('condition',nums[i-window])
        while(tempVal + nums[i-window] >= target){
            window--
            tempVal -= nums[i-window]
            console.log('temp-=',tempVal, nums[i-window])
            console.log('window after minus',window)
            if(minWindowSize >= window){
                minWindowSize = window
            }
        }
    }
    if(minWindowSize === Infinity) return 0
    return minWindowSize
};

// console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1,4,4]))


//gagal
//leetcode ajggggggggg
