var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
     var i = 0;
     for (var j = 1; j < nums.length; j++) {
         if (nums[j] != nums[i]) {
             i++;
             nums[i] = nums[j];
         }
     }
     return i + 1;
 }

// var removeDuplicates = function(nums) {
//    if (nums.length == 0) return 0;
//     var i = 0;
//     for (var j = 1; j < nums.length; j++) {
//         if (nums[j] != nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1;
// }
test([1,2,3,4,4,5,6,1])