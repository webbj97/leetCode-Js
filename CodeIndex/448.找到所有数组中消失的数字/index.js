/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var max = Math.max(...nums) > nums.length+1 ? Math.max(...nums) : nums.length+1
    var obj = {}
    var res = []
    for(let i = 0; i <= nums.length; i++){
        obj[nums[i]] = nums[i]
    }
    for(let i = 1; i < max; i++){
        if(!obj[i]){
            res.push(i)
        }
    }
    return res
};

var res = findDisappearedNumbers([1,1,2,2])
console.log('res:', res);
