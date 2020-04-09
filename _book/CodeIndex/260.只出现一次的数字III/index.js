// var singleNumber = function(nums) {
//     var obj = {}
//     var res = []
//     nums.forEach(item => {
//         if(obj[item]){
//             delete obj[item]
//         }else{
//             obj[item] = 1
//         }
//     });
//     for(let key in obj){
//         res.push(key)
//     }
//     return res
// };

var singleNumber = function(nums) {
    var obj = {}
    var res = []
    nums.forEach(item => {
        if(obj[item]){
            delete obj[item]
        }else{
            obj[item] = 1
        }
    });
    for(let key in obj){
        res.push(key)
    }
    return res
};

var res = singleNumber([1,2,1,3,2,5])
console.log('res:', res);
