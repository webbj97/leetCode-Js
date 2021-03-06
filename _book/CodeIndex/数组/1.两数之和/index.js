// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// var twoSum = function(nums, target) {
//     for(let i = 0;i < nums.length-1; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if(nums[i]+nums[j] == target)
//             return [i, j]
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         const otherIndex = map.get(target - nums[i])
//         if (otherIndex !== undefined) return [otherIndex, i]
//         map.set(nums[i], i)
//     }
// };

var twoSum = function(nums, target) {
    var temp = {};
    for(var i=0;i<nums.length;i++){
        var dif = target - nums[i];
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
    }
};

var res = twoSum([3, 2, 4], 6)
console.log("res:", res);