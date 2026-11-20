// 121. Best Time to Buy and Sell Stock
// Easy
// Topics
// premium lock icon
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


// function maxProfit(prices: number[]): number {
//     if(prices.length === 1) return 0
//     const value = new Map<String, Number>([])
//     for (const nums in prices){
//         if(!value.has("lowest")) value.set("lowest", prices[nums])
//         if(!value.has("highest")) value.set("highest", prices[nums])
//         if(!value.has("profit")) value.set("profit", -1)

//         console.log(prices[nums])
//         console.log(value)
        
//         if(Number(value.get("lowest")) >= prices[nums]  && Number(value.get("profit")) < Number(Number(value.get("highest")) - Number(value.get("lowest")))) {
//             value.set("lowest", prices[nums])
//             value.set("highest", prices[nums])
//         }
//         else if(Number(value.get("highest")) < prices[nums]) {
//             value.set("highest", prices[nums])
//             value.set("profit", Number(Number(value.get("highest")) - Number(value.get("lowest"))))
//         }
//     }
//     console.log(value)
//     if(!value.has("highest")) return Number(value.get("lowest"))
//     return Number(Number(value.get("highest")) - Number(value.get("lowest")))
// };

// console.log(maxProfit([2,1,2,1,0,1,2]))

// dk biso dipakso pake 1 variabel hash map cookkk goblokkk
// time wasted on ts above: 50 minute

function maxProfit(prices: number[]): number {
    if(prices.length === 1) return 0
    let profit = 0
    const value = new Map<String, Number>()

    for(const i in prices){
        if(!value.has("lowest")) value.set("lowest", prices[i])
        if(!value.has("highest")) value.set("highest", prices[i])
        
        if(Number(value.get("lowest")) > prices[i]){
            value.set("lowest", prices[i])
            value.set("highest", prices[i])
        } else if (Number(value.get("highest")) < prices[i]){
            value.set("highest", prices[i])
        }
        
        if (profit < Number(Number(value.get("highest")) - Number(value.get("lowest")))){
            profit = Number(Number(value.get("highest")) - Number(value.get("lowest")))
        }
    }

    return profit
};

console.log(maxProfit([2,1,2,1,0,1,2]))


// masih dk biso dipakso pake 2 variabel keknyo skil issue
// time wasted on ts above: 1:14:54


// function maxProfit(prices: number[]): number {
//     if(prices.length === 1) return 0
//     let profit = -1
//     let highest: number = prices[0]
//     let lowest: number = prices[0]

//     for(const i in prices){
//         console.log("prices i",prices[i])
//         console.log('highest', highest)
//         console.log('lowest', lowest)
//         if(lowest > prices[i]){
//             console.log('---------masuk ke lowest')
//             lowest = prices[i]
//             highest = prices[i]

//         } else if (highest < prices[i]){
//             console.log('---------masuk ke highest')

//             highest = prices[i]
//         }
//         if (profit < highest - lowest){
//             profit = highest - lowest
//         }
//     }

//     console.log(highest,lowest)
//     return profit
// };

// console.log(maxProfit([2,4,1]))

