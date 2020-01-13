/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     var max = Math.max(...nums) > nums.length+1 ? Math.max(...nums) : nums.length+1
//     var obj = {}
//     var res = []
//     for(let i = 0; i <= nums.length; i++){
//         obj[nums[i]] = nums[i]
//     }
//     for(let i = 1; i < max; i++){
//         if(!obj[i]){
//             res.push(i)
//         }
//     }
//     return res
// };

var findDisappearedNumbers = function(nums) {
    var len = nums.length
    var obj = {}
    for(let i = 0; i < len; i++){
        if(obj[nums[i]]){
            obj[nums[i]] += 1
        }else{
            obj[nums[i]] = 1
        }
    }
    for(let i = 0; )
    
};

var res = findDisappearedNumbers([4,3,2,7,8,2,3,1])
console.log('res:', res);
