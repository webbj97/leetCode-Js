/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(num, target) {
//     var len = num.length
//     var i = 0
//     while(i < len){
//         var temp = target - num[i]
//         if(num.lastIndexOf(temp) != -1){
//             return [i+1, num.lastIndexOf(temp)+1]
//         }
//         i++
//     }
// };

// var twoSum = function(num, target) {
//     var len = num.length
//     for(let i = 0; i < len; i++){
//         for(let j = i+1; j < len; j++){
//             if(num[i]+num[j] === target) return [i+1, j+1]
//         }
//     }
// };

// var twoSum = function(numbers, target) {
//     let map = new Map()
//     for(let i = 0; i < numbers.length; i ++) {
//         if(map.has(target - numbers[i])) {
//             return [map.get(target - numbers[i]) + 1, i + 1]
//         }
//         map.set(numbers[i], i)
//     }
// };

// var twoSum = function(num, target) {
//     var obj = {}
//     for(let i = 0; i < num.length; i ++) {
//         let temp = target - num[i]
//         if(obj[temp]) {
//             return [obj[temp], i + 1]
//         }
//         obj[num[i]] = i+1
//     }
// };

var twoSum = function(num, target) {
    var left = 0
    var right = num.length - 1
    while(left < right){
        let sum = num[left] + num[right]
        if(sum === target) return [left+1, right+1]
        else if (sum > target){
            right--
        }else if(sum < target){
            left++
        }
    }
};
var res = twoSum([2,7,11,15], 9)
console.log('res:', res);
