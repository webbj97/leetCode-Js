/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-09-24 13:59:43
 */

// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1
// 示例 2:

// 输入: coins = [2], amount = 3
// 输出: -1

const coinChange = function(coins, amount) {
    let len = coins.length - 1;
    let need = 0;
    let temp = amount;
    while(len >= 0){
        need += parseInt(temp / coins[len]) > 0 ? parseInt(temp / coins[len]) : 0;
        temp = amount % coins[len];

        console.log('len:', len);
        console.log('temp:', temp);
        console.log('coins[len]:', coins[len]);
        console.log('need:', need);

        len--;
    }
    return temp ? -1 : need;
};

console.log(coinChange([1, 2147483647], 2));