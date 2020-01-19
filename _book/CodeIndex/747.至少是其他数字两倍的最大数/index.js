var dominantIndex = function(nums) {
    var max = 0
    var maxIdx = 0
    nums.forEach((item, index) => {
        if (max <= item) {
            max = item
            maxIdx = index
        }
    });
    for(let i = 0; i < nums.length; i++){
        if(i !== maxIdx ){
            if(max < 2*nums[i]){
                return -1
            }
        }
    }
    return maxIdx
};

// var dominantIndex = (nums) => {
//     var one = 0
//     var two = 0
//     var oneIdx = 0
//     nums.forEach((item, index) => {
//         if (one < item) {
//             two = one
//             one = item
//             oneIdx = index
//         } else if (two < item) {
//             two = item
//         }
//     });
//     return one >= two * 2 ? oneIdx : -1
// };

var res = dominantIndex([0,0,0,1])
console.log('res:', res);