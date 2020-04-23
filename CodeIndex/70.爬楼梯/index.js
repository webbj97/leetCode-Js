/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2019-11-14 18:12:30
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    newClimbStairs(0, n);
};
var newClimbStairs = function(i, n){
    if (i > n) {
        return 0;
    }
    if (i == n) {
        return 1;
    }
    return newClimbStairs(i+1, n) + newClimbStairs(i+2, n)
}

var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    var arr = []
    arr[1] = 1
    arr[2] = 2
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}
