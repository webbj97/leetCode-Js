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