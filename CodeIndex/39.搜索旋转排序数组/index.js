/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     return nums.indexOf(target)
// };

// var search = function(nums, target) {
//     var left = 0, right = nums.length - 1;
//     while (left < right) {
//         var mid = Math.floor((left+right)/2)
//         if ((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid]))
//             left = mid + 1;
//         else
//             right = mid;
//     }
//     return left == right && nums[left] == target ? left : -1;
// };

// var res = search([4,5,6,7,0,1,2], 0)
// console.log('search:', res);

function deep( obj ) { 
    var arr = []
    for( var i in obj ) { 
        if ( typeof obj[i] === "object" ) { 
            deep ( obj[i] ); 
        }else{ 
            arr.push( obj[i] ); 
        } 
    } 
    return arr
} 
var obj = {
    name: [1,2,3],
    age: 11,
    height: {
        m: '1',
        cm: '2',
        dm: '3'
    }
}
var res = deep(obj)
console.log('res:', res);
