/*
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
说明:

A.length == n + m
*/

// var merge = function(A, m, B, n) {
//     let j = 0
//     for(let i = m; i < m + n; i++){
//         A[i] = B[j++]
//     }
//     A = A.sort((a, b)=>{
//         return a-b;
//     })
//     return A
// };

// var merge = function(A, m, B, n) {
//     var a = 0, b = 0;
//     var arr = []
//     while(a < m || b < n){
//         if(a === m){
//             arr.push(B[b++])
//         }else if(b === n){
//             arr.push(A[a++])
//         }else if(A[a] < B[b]){
//             arr.push(A[a++])
//         }else{
//             arr.push(B[b++])
//         }
//     }
//     return arr
// };


var merge = function(A, m, B, n) {
    A.splice(m, n, ...B)
    A.sort((a, b) => a - b)
    return A
};

var res = merge([1,1,2,0,0,0],3,[2,5,6],3)
console.log('res:', res);
