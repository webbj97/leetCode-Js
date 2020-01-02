/**
 * @param {number} n
 * @return {number}
 */

// 判断整数 n 是否是素数
// function isPrime(n) {
//     for (let i = 2; i * i <= n; i++)
//         if (n % i == 0) return false;// 有其他整除因子
//     return true;
// }
// function countPrimes(n) {
//     var count = 0;
//     for (let i = 2; i < n; i++){
//         if (isPrime(i)) count++;
//     }
//     return count;
// }

var countPrimes = function(n) {
    let count = 0
    signs = []
    for (let i = 2; i < n; i++) {
        console.log('i:', i);
        if (!signs[i]) {
            count++
            for (let j = 2 * i; j < n; j += i) {
                console.log('j:', j);
                signs[j] = true
            }
        }
        console.log('-----');
    }
    return count
};

var res = countPrimes(10)
console.log('res:', res);
