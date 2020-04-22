/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-21 09:42:53
 */
// var smallerNumbersThanCurrent = function(nums) {
//     var obj = {}
//     var res = new Array(nums.length).fill(0);
//     nums.forEach(item => {
//         if(!obj[item]){
//             obj[item] = 1
//         }else{
//             obj[item]++
//         }
//     });
//     for(let i = 0;i < nums.length; i++){
//         for(var key in obj){
//             if(nums[i] > key){
//                 res[i] += obj[key]
//             }
//         }
//     }
//     return res
// };

var smallerNumbersThanCurrent = function(nums) {
    var arr = [].concat(nums)
    arr = arr.sort((a,b)=>a-b)
    let index = 0,res = []
    for(let i = 0; i < nums.length; i++){
        index = arr.indexOf(nums[i])
        index = index > 0 ? index : 0
        res[i] = index
    }
    return res
};

var res = smallerNumbersThanCurrent([8,1,2,2,3])
console.log('res:', res);

