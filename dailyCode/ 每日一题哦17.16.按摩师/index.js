// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。
// 在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。
// 给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。


// 示例 1：
// 输入： [1,2,3,1]
// 输出： 4
// 解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。

// 示例 2：
// 输入： [2,7,9,3,1]
// 输出： 12
// 解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。

// 示例 3：
// 输入： [2,1,4,5,3,1,1,3]
// 输出： 12
// 解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。

// 首先考虑动态规划


/**
 * @param {number[]} nums
 * @return {number}
 */
// var massage = function(nums) {
//     var arr = []
//     var len = nums.length
//     console.log('len:', len);

//     if(!len) return 0;
//     if(len === 1) return nums[0];
//     arr[0] = nums[0]
//     arr[1] = nums[0] > nums[1] ? nums[0] : nums[1]
//     for(let i = 2; i < len; i++){
//         arr[i] = Math.max(arr[i-1], arr[i-2]+nums[i])
//     }
//     return arr[len-1]
// };

var massage = function(nums) {
    var a = 0, b = 0

    for(let i = 0; i < nums.length; i++){
        let c = Math.max(b, nums[i]+a) //兼容了数组长度为1和0的情况
        a = b
        b = c
    }
    return b
};

// 核心思想：dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])

var arr = [1,2,3,1]
// var arr = []
var res = massage(arr)
console.log('res:', res);
