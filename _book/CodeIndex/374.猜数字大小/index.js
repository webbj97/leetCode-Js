/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-18 13:37:29
 */
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// var guessNumber = function(n) {
//     for(let i = 1; i < n; i++){
//         if(guess(i) === 0) return i
//     }
//     return n
// };

var guessNumber = function(n) {
    var left = 1
    var right = n
    while(left <= right){
        var mid = left + (right - left) / 2
        if(guess(mid) < 0){
            left = mid+1
        }else if(guess(mid) > 0){
            right = mid-1
        }else{
            return mid
        }
    }
};