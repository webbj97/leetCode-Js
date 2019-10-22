/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//     var res = [-1, -1]
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] == target){
//             res[0] = i
//             break;
//         }
//     }
//     for(let i = nums.length-1; i >= 0; i--){
//         if(nums[i] == target){
//             res[1] = i
//             break;
//         }
//     }
//     return res
// };

// const searchRange = (nums, target) => {
//     let len = nums.length
//     let start = 0
//     let end = len - 1
//     let mid = -1
//     let flag = 0
//     while (start <= end) {
//         mid = Math.floor((start + end) / 2)
//         if (target < nums[mid]) {
//             end = mid - 1
//         } else if (target > nums[mid]) {
//             start = mid + 1
//         } else {
//             flag = 1
//             break
//         }
//     }
//     if (!flag) {
//         return [-1, -1]
//     }
//     start = mid
//     end = mid
//     while (start - 1 >= 0 && nums[start - 1] == target) {
//         start--
//     }
//     while (end + 1 <= len - 1 && nums[end + 1] == target) {
//         end++
//     }
//     return [start, end]
// }

const searchRange = (nums, target) => {
    return [nums.indexOf(target),nums.lastIndexOf(target)]
}

var res = searchRange([5, 7, 7, 8, 8, 10], 10)
console.log(res)