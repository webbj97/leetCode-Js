var reverse = function(x) {
    var neg = x > 0 ? true : false
    var num = neg ? x : -x
    var newNum = Number(num.toString().split("").reverse().join(""));
    return neg ? newNum : -newNum
}
var res = reverse(-1234)
console.log(res)