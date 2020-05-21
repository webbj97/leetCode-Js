/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-20 16:12:39
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var obj = {}
    for(let i = 0; i < s.length; i++){
        if(!obj[s[i]] && obj[s[i]] !== 0){
            obj[s[i]] = i
        }else{
            obj[s[i]] = 'unone'
        }
    }
    for(let key in obj){
        if(obj[key] !== 'unone'){
            return obj[key]
        }
    }
    return -1
};

var s = "loveleetcode"
// 返回 0.
var res = firstUniqChar(s)
console.log('sres:', res);