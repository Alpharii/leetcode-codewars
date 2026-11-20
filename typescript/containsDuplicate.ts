

function containsDuplicate(nums: number[]): boolean {
    const numberSet = new Set<number>([])
    for (const num of nums){
        if(numberSet.has(num)) return true
        numberSet.add(num)
    }
    return false
}

console.log(containsDuplicate([1, 2, 3, 4]))
