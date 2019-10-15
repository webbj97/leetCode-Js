/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 题干要求，原地修改nums
// var rotate = function(nums, k) {
//     while(k > 0){
//         let a = nums.pop()
//         nums.unshift(a)
//         k--
//     }
//     return nums
// };

// var rotate = function(nums, k) {
//     var temp, pre
//     for (let i = 0; i < k; i++) {
//         pre = nums[nums.length - 1];
//         for (let j = 0; j < nums.length; j++) {
//             temp = nums[j];
//             nums[j] = pre;
//             pre = temp;
//         }
//     }
//     return nums
// };

// var rotate = function(nums, k) {
//     var arr = []
//     for(let i = 0; i < nums.length; i++){
//         arr[(i+k)%nums.length] = nums[i]
//     }
//     for(let j = 0; j < nums.length; j++){
//         nums[j] = arr[j]
//     }
//     return nums
// };

var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums
};
var reverse = function(nums, left, right) {
    while (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
};

var res = rotate([1, 2, 3, 4, 5, 6, 7], 3)
console.log('res:', res);