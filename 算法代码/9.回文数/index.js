/**
 * @param {number} x
 * @return {boolean}
 */
var x = 1221
// function symmetry(x) {
//     if(x < 0){
//         return false
//     }
//     var arr = x.toString().split('')
//     var len = arr.length
//     for(let i = 0; i< len/2; i++){
//         if(arr[i] != arr[len-i-1]){
//             return false
//         }
//     }
//     return true
// };

// function symmetry(x) {
//     if (x < 0) {
//         return false
//     }
//     var len = 1
//     while(x/len >= 10){
//         len *= 10
//     }// 由此得出数字的位数 传入123-> 123/1 = 123 > 10 -> len = 10 -> 123/10 = 12 > 10 -> len = 10*10 = 100 和123同级别
//     while(x > 0){
//         console.log('x',x)
//         var left = parseInt(x / len) //得首位
//         var right = x % 10 // 得末位
//         console.log('zuo:',left,'you:',right)
//         if(left != right) return false
//         x = parseInt((x%len) / 10)  //去掉首位->取余长度 去掉末位->取整10
//         len /= 100 //比较一次减少两位 
//     }
//     return true
// }

function symmetry(x) {
    if(x < 0 || (x % 10 == 0 && x != 0)){
        return false
    }
    var index = 0 //右侧值
    while (x > index) {
        index = index * 10 + x % 10; // 1 -> 12 -> 122
        x = parseInt(x / 10) ; //1221 -> 122 -> 12 -> 1
    }
    return x == index || x == parseInt(index / 10)

}
var res = symmetry(x)
console.log(res)