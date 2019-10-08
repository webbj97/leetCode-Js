/**
 * @param {number[]} nums
 * @return {number}
 */

// var firstMissingPositive = function(nums) {
//     var arr = [],i = 1
//     nums.forEach(e => {
//         if(e > 0){
//             arr.push(e)
//         }
//     });
//     while(arr.indexOf(i) >= 0 ){
//         i++
//     }
//     return i
// };

var firstMissingPositive = function(nums) {
    var arr = [],i = 1
    if(nums.indexOf(1) < 0){
        return 1
    }else if(nums = [1]){
        return 2
    }
    nums.forEach((e,i) => {
        if( e <= 0 ){
            nums[i] = 1
        }
    });
    return nums
};

var res = firstMissingPositive([-1,-2,7,2,1,9,12])
console.log(res)