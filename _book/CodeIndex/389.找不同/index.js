/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-20 14:42:17
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function(s, t) {
//     var obj = {}
//     for(let i = 0; i < s.length; i++){
//         if(obj[s[i]]){
//             obj[s[i]] += 1
//         }else{
//             obj[s[i]] = 1
//         }
//     } // 统计s字符串的所有次数
//     for(let i = 0; i < t.length; i++){
//         if(obj[t[i]]){
//             obj[t[i]] -= 1
//         }else{
//             return t[i]
//         }
//     } // 逐位抵消
//     return -1
// };

var findTheDifference = function(s, t) {
    var str = s+t
    var a = str.charCodeAt(0)
    for(let i = 1; i < str.length; i++){
        a = a ^ str.charCodeAt(i)
    }
    return String.fromCharCode(a)
};

var s = 'abdc'
var t = 'abecd'
var res = findTheDifference(s ,t)
console.log('res:', res);