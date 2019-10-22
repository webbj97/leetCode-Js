/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var left = 0,
        idx = 0; //左边界
    var right = nums.length - 1; //右边界

    var temp; //中间值
    while (idx <= right) {
        if (nums[idx] == 0) {
            // 交换第 left个和第idx个元素
            // i++，j++
            temp = nums[left];
            nums[left++] = nums[idx];
            nums[idx++] = temp;
        } else if (nums[idx] == 2) {
            // 交换第k个和第idx个元素
            // right--
            temp = nums[idx];
            nums[idx] = nums[right];
            nums[right--] = temp;
        } else idx++;
    }
    return nums
};



var data = [2, 0, 2, 1, 1, 0]
var res = sortColors(data)
console.log(res, 'res')