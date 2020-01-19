/**
 * @param {number[]} A
 * @return {number[]}
 */
// var sortedSquares = function(A) {
//     var arr = []
//     A.forEach(item => {
//         arr.push(item * item)
//     });
//     arr.sort((a, b) => {
//         return a - b
//     })
//     return arr
// };

var sortedSquares = function(A) {
    var N = A.length
    var left = 0
    var arr = []
    A.forEach(item => {
        if(item < 0) left++
    });
    var right = A.length - left
    left-- // 数量转下标
    right--
    while(left >= -1 && right < N ){
        var leftP = A[left]*A[left]
        var rightP = A[right]*A[right]
        if(leftP < rightP){
            left--
            arr.push(leftP)
        }else{
            right++
            arr.push(rightP)
        }

    }
    return arr
};

var res = sortedSquares([-4,-1,0,3,10])
console.log('res:', res);