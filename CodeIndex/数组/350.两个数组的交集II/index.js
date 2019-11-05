/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arrShort = nums1.length > nums2.length ? nums2 : nums1
    var arrLarge = nums1.length > nums2.length ? nums1 : nums2
    for(let i = 0; i < arrLarge.length; i++){
        if(arrShort.indexOf(arrLarge[i]) === -1){
            arrShort.splice(i, 1)
            i--
        }
    }
    return arrShort
};

var res = intersect([4,9,5], [9,4,9,8,4])
console.log(res,'res');