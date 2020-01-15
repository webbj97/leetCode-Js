// var sortArrayByParityII = function(A) {
//     var index = 0
//     var res = []
//     A.forEach(item => {
//         if(item % 2 === 0){
//             res[index] = item
//             index+=2
//         }
//     });
//     index = 1
//     A.forEach(item => {
//         if(item % 2 !== 0){
//             res[index] = item
//             index+=2
//         }
//     });
//     return res;
// };

var sortArrayByParityII = function(A) {
    var left = 0,right = A.length-1;
    var res = []
    A.forEach(item => {
        if(item % 2 === 0){
            res[left] = item
            left+=2
        }else{
            res[right] = item
            right-=2
        }
    });
    return res;
};
var res = sortArrayByParityII([4,2,5,7])
console.log('res:', res);
