/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function(nums) {
//     var k = 3
//     var obj = {}, arr = []
//     if(nums.length < 3){
//         return Math.max(...nums)
//     }
//     for(let i = 0; i < nums.length;i++){
//         if(!obj[nums[i]]){
//             obj[nums[i]] = 1
//         }
//     }
//     for(let key in obj){
//         arr.push(Number(key))
//     }
//     if(arr.length < 3){
//         return Math.max(...arr)
//     }
//     while (0 < --k) {
//         arr.splice(arr.indexOf(Math.max(...arr)), 1)
//     }
//     return Math.max(...arr)
// };

// var thirdMax = function(nums) {
//     var arr = new Set(nums)
//     arr = [...arr]
//     arr.sort(newSort)
//     if(arr.length<3) return arr[0]
//     return arr[2]
// };
// var newSort = function(a, b){
//     return b - a
// }

// var thirdMax = function(nums) {
//     var brr = []
//     var arr = new Set(nums)
//     arr = [...arr]
//     if(arr.length < 3) return Math.max(...arr)
//     for(let i = 0; i < arr.length; i++){
//         if(brr.length < 3){
//             brr.push(arr[i])
//         }else{
//             let min = Math.min(...brr)
//             if(arr[i] > min){
//                 brr.splice(brr.indexOf(min), 1)
//                 brr.push(arr[i])
//             }
//         }
//     }
//     return Math.min(...brr)
// };

var thirdMax = function(nums) {
    var arr = new Set(nums)
    var res = []
    arr = [...arr]
    if(arr.length < 3) return Math.max(...arr)
    for(let i = 0; i < arr.length; i++){
        if(res.length < 3){
            res.push(arr[i])
        }else{
            if(arr[i] > res[0]){
                res[0] = arr[i]
            }
        }
        res.sort(newSort)
    }
    return res[0]
};

var newSort = function(a, b){
    return a - b
}
var res = thirdMax([1,2,3])
console.log('res:', res);
