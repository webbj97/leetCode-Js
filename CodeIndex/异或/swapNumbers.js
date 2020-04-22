/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-21 09:24:34
 */
function swapNumbers(nums) {
    var a = nums[0] ^ nums[1]
    var b = a ^ nums[1]
    var c = a ^ b

    console.log('a:', a);
    console.log('b:', b);
    console.log('c:', c);
    // 0001 ^ 0010 = 0011 = 3
}
var res = swapNumbers([1,2])
console.log('res:', res);