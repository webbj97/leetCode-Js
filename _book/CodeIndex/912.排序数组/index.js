// 冒泡
// 两个数比较大小，较大的数下沉，较小的数冒起来
// var sortArray = function(nums) {
//     var swap = function (i, j) {
//         var temp = 0
//         temp = nums[i]
//         nums[i] = nums[j]
//         nums[j] = temp
//     }
//     for(let i = 0;i < nums.length; i++){
//         for(let j = 0;j < nums.length; j++){
//             if(nums[i] < nums[j]){
//                 swap(i, j)
//             }
//         }
//     }
//     return nums
//     console.log('nums:', nums);
// };


var res = sortArray([5,1,1,2,0,0])
console.log('res:', res);
