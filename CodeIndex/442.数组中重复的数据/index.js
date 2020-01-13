/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDuplicates = function(nums) {
//     let arr = [];
//     nums.map((item, index) => {
//         if (nums.indexOf(item) !== index) {
//             arr.push(item)
//         }
//     });
//     return (arr)
// };

var findDuplicates = function(nums) {
    var obj = {}
    var arr = []
    nums.forEach(item => {
        if(obj[item]){
            arr.push(item)
        }else{
            obj[item] = 1
        }
    });
    return arr
};

var res = findDuplicates([4,3,2,7,8,2,3,1])
console.log('res:', res);
