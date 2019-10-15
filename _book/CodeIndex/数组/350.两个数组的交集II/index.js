/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var arrShort = nums1.length > nums2.length ? nums2 : nums1
    var arrLarge = nums1.length > nums2.length ? nums1 : nums2
    var res = []
    for(let i = 0; i < arrShort.length; i++){
        let idx = arrLarge.indexOf(arrShort[i])
        if(idx >= 0){
            res.push(arrLarge[idx])
            arrLarge.splice(idx, 1)
        }
    }
    return res
};

// var intersect = function(nums1, nums2) {
//     var arrShort = nums1.length > nums2.length ? nums2 : nums1
//     var arrLarge = nums1.length > nums2.length ? nums1 : nums2
//     for(let i = 0; i < arrShort.length; i++){
//         let idx = arrLarge.indexOf(arrShort[i])
//         if(idx >= 0){
//             arrLarge.splice(idx, 1)
//         }else{
//             arrShort.splice(i, 1)
//             i--
//         }
//     }
//     return arrShort
// };
var res = intersect([3,1,2], [1,1])
console.log(res,'res');