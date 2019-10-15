/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    left = 0;
    right = nums.length - 1
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2) //防止溢出
        if (target == nums[mid]) {
            return mid
        } else if (target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return - 1
};

var res = search([-1, 0, 3, 5, 9, 12], 2)
console.log(res)