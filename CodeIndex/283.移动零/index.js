// var moveZeroes = function(nums) {
//     //todo 冒泡的变种方式实现
//     let right = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i + 1 > right) {
//             right = i + 1;
//         }
//         if (nums[i] == 0) {
//             while (nums[right] == 0 && right < nums.length) { //找到非0的下一个数字然后交换
//                 right++;
//             }
//             if (right >= nums.length) {
//                 break;
//             }
//             let middle = nums[i];
//             nums[i] = nums[right];
//             nums[right] = middle;
//             right++;
//         }
//     }
// };

var moveZeroes = function(nums) {
    var res = []
    var len = 0
    nums.forEach(item => {
        len = res.length
        if(item !== 0){
            res[len] = item
        }else{
            res.push(item)
        }
    });
    console.log('res:', res);
    
};

var res = moveZeroes([0,1,0,3,12])

console.log('res:', res);
