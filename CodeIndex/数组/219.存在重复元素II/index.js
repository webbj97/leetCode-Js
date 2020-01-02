/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function(nums, k) {
//     var obj = {}
//     for(let i = 0; i < nums.length; i++){
//         if(obj[nums[i]] || obj[nums[i]] === 0){
//             let count = Math.abs(i - obj[nums[i]])
//             if(count <= k){
//                 return true
//             }else{
//                 obj[nums[i]] = i
//             }
//         }else{
//             obj[nums[i]] = i
//         }
//     }
//     return false
// };

// var containsNearbyDuplicate = function (nums, k) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
//             return true;
//         } else {
//             map.set(nums[i], i);
//         }
//     }
//     return false;
// };

var containsNearbyDuplicate = function (nums, k) {
    var set = new Set()
    for (let i = 0; i < nums.length; ++i) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
}


var res = containsNearbyDuplicate([1,2,3,1,2,3], 2)
console.log('res:', res);
