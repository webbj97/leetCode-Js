// // 解法一
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;
//     var arrS = s.split('')
//     var arrT = t.split('')
//     for(let i = 0; i < arrS.length; i++){
//         let index = arrT.indexOf(arrS[i])
//         if(index !== -1){
//             arrS.splice(i, 1)
//             arrT.splice(index, 1)
//             i--
//         }
//     }
//     return arrS.length == 0
// };

// // 解法二
// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;
//     var arrS = s.split('').sort()
//     var arrT = t.split('').sort()
//     for(let i = 0; i < arrS.length; i++){
//         if(arrS[i] != arrT[i])
//         return false
//     }
//     return true
// };

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    var objS = {},objT = {}
    for(let i = 0; i < s.length; i++){
        if(objS[s[i]]){
            objS[s[i]] += 1
        }else{
            objS[s[i]] = 1
        }
        if(objT[t[i]]){
            objT[t[i]] += 1
        }else{
            objT[t[i]] = 1
        }
    }
    for(let key in objS){
        if(objS[key] != objT[key])  return false
    }
    return true
};


var res = isAnagram("anagram","nagaram")
console.log(res)