/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-22 11:10:52
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var rightMax = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
        var t = arr[i];
        arr[i] = rightMax;
        if (t > rightMax) rightMax = t;
    }
    return arr;
};
var res = replaceElements([17,18,5,4,6,1])
console.log('res:', res);
// 输出：[18,6,6,6,1,-1]