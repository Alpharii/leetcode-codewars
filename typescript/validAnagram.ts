

function isAnagram(s: string, t: string): boolean {
    const seenMap = new Map<string, number>()
    for (let i = 0; i < s.length; i++){
        if(seenMap.has(s[i])) seenMap.set(s[i], Number(seenMap.get(s[i])) + 1)
        else seenMap.set(s[i], 1)
    }

    for (let i = 0; i < t.length; i++){
        if(seenMap.has(t[i])) seenMap.set(t[i], Number(seenMap.get(t[i])) - 1)
        else seenMap.set(t[i], -1)
    }

    for (const value of seenMap.values()){
        if(value !== 0) return false
    }
    return true
}

console.log(isAnagram("aba", "baa"))
