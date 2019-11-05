/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var arrShort = nums1.length > nums2.length ? nums2 : nums1
    var arrLong = nums1.length > nums2.length ? nums1 : nums2
    var res = []
    arrShort.forEach(item => {
        if(arrLong.indexOf(item) >= 0){
            if(res.indexOf(item) == -1){
                res.push(item )
            }
        }
    });
    return res
};

// var intersection = function(nums1, nums2) {
//     var arrShort = nums1.length > nums2.length ? nums2 : nums1
//     var arrLong = nums1.length > nums2.length ? nums1 : nums2
//     var res = []
//     arrShort.forEach(item => {
//         if(arrLong.indexOf(item) >= 0){
//             if(res.indexOf(item) == -1){
//                 res.push(item)
//             }
//         }
//     });
//     return res
// };


// var res = intersection([9,4,9,8,4],[4,9,5])
// console.log(res,'res')

var arr = [0,1,2,3,4,5,6,7,8];
console.log(arr);
arr.forEach((e, i) => {
    console.log('第',i,'位是：',e);
    if(i === 4){
        arr.splice(i, 1)
    }
});