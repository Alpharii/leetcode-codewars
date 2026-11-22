const input = [2, 11, 15, 7]
const target = 9

function twoSum1(nums: number[], target: number): number[] {
    const numsMap = new Map<number, number>()
    for(let i = 0; i< nums.length; i++){
        const goals = target - nums[i]
        if(numsMap.has(goals)){
            return ([Number(numsMap.get(goals)), i])
        }
        numsMap.set(nums[i], i)
    }
    return []
}

console.log(twoSum(input, target))
