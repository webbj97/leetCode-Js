/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var obj = {}
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]] || obj[nums[i]] === 0){
            let count = Math.abs(i - obj[nums[i]])
            if(count <= k){
                return true
            }else{
                obj[nums[i]] = i
                
            }
        }else{
            obj[nums[i]] = i
        }
    }
    return false
};

var res = containsNearbyDuplicate([1,0,1,1], 1)
console.log('res:', res);
