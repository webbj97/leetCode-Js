/**
 * @param {string[]} strs
 * @return {string}
 */

var strs = ["aca", "cba"]

// function str(strs) {
//     var strLen = strs.length
//     var min = strs[0]

//     if (strLen == 0) {
//         return ""
//     }// 无元素，结果为空
//     if (strLen == 1) {
//         return strs[0]
//     }//一个元素，结果当前元素
//     strs.forEach(e => {
//         if (e.length < min.length) {
//             min = e
//         }
//     });//得到最短的字符串
//     var temp = strs[0];//当前比较值
//     for (let i = 0; i < strLen - 1; i++) {
//         console.log(temp,"temp")
//         let res = '';
//         for (let j = 0; j < min.length; j++) {
//             if (temp[j] == strs[i+1][j] && res.length == j) {
//                 res += strs[i+1][j]
//             }
//         }
//         temp = res
//         console.log(temp)
//     }
//     return temp
// };
function str(strs) {
    var re = '';
    var min = strs[0]
    strs.forEach(e => {
        if (e.length < min.length) {
            min = e
        }
    });//得到最短的字符串
    if (!strs.length) return re;
    for (var j = 0; j < min.length; j++) { //第j位
        for (var i = 1; i < strs.length; i++) { //第i个
            if (strs[i][j] != strs[0][j]) return re
        }
        re += min[j];
    }
    return re;
};

var a = str(strs)
console.log(a, "a")