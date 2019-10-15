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
    if(obj.isArray()){
        // toDo 如果传入的是数组，进行处理
    }
    // 如果是对象，惊醒处理
    for( var key in obj ) { 
        if( key == 'id'){
            arrId.push(obj[key])
        }else if(key == 'lebel'){
            arrLebel.push(obj[key])
        }else{
            deep(obj[key]); 
        }
    } 
    return arr
} 

var res = deep(obj)
console.log('res:', res);
