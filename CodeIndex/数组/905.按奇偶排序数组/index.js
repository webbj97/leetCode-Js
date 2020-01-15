// var sortArrayByParity = function(A) {
//     var index = 0;
//     var res = []
//     A.forEach(item => {
//         if(item % 2 === 0){
//             res.push(item)
//             index++
//         }
//     });
//     A.forEach(item => {
//         if(item % 2 !== 0){
//             res.push(item)
//             index++
//         }
//     });
//     return res;
// };

var sortArrayByParity = function(A) {
    var left = 0,right = A.length-1;
    var res = []
    A.forEach(item => {
        if(item % 2 === 0){
            res[left++] = item
        }else{
            res[right--] = item
        }
    });
    return res;
};

var res = sortArrayByParity([3,1,2,4])
console.log('res:', res);
