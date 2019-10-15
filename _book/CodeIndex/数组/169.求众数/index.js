// // var majorityElement = function(nums) {
// //     var obj = {}
// //     for(let i = 0; i < nums.length; i++){
// //         if(obj[nums[i]]){
// //             obj[nums[i]]++
// //         }else{
// //             obj[nums[i]] = 1
// //         }
// //     }
// //     var max = 0, res = nums
// //     for(var key in obj){
// //         if(obj[key] > max) {
// //             max = obj[key]
// //             res = key
// //         }
// //     }
// //     return res
// // };

// var majorityElement = function(nums) {
//     nums.sort((a, b)=>{
//         return a-b
//     })
//     return nums[Math.floor(nums.length/2)]
// };

// var res = majorityElement([2,2,1,1,1,2,2])
// console.log('res:', res);

var arr = {
    0:{name: 1, age: '11', height: '2m'},
    1:{name: 1, age: '11', height: '2m'},
    2:{name: 1, age: '11', height: '2m'},
    3:{name: 1, age: '11', height: '2m'},
}

var config = {
    name: [],
    age: [],
    height: []
}
arr.filter((item=>{
    config.forEach(configItem => {
        if(configItem.length){
            return configItem.has(item)
        }
    });
}))
console.log('arr:', arr);
