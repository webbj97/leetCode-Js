/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-04-26 11:17:44
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
// var isMonotonic = function(A) {
//     // var compare = {
//     //     up: 0,
//     //     down: 0,
//     // }
//     var now = 0
//     var next = 0
//     var res = 0
//     for(let i = 0; i < A.length-1; i++){
//         now = A[i+1] - A[i]
//         if(res > 0){
//             compare.up++
//         }else if(res < 0){
//             compare.down++
//         }
//     }
//     if(compare.up > 0 && compare.down > 0){
//         return false
//     }
//     return true
// };

var isMonotonic = function(A) {
    if(A.length === 1) return true;
    var up = '', down = '';
    for(let i = 0; i < A.length-1; i++){
        if(A[i+1] - A[i] >=0) {
            up = true;
        }else{
            up = false;
            break;
        }
    }
    for(let i = 0; i < A.length-1; i++){
        if(A[i+1] - A[i] <= 0) {
            down = true;
        }else{
            down = false;
            break;
        }
    }
    return up || down
};

var res = isMonotonic([1,2,4,3])
console.log('res:', res);