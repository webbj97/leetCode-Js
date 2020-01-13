/*
动态规划 解决 斐波那契

*/
function recurFib(n) {
    if (n < 2) {
        return n;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    } //长度 = 斐波那契数列要算的值
    if (n == 1 || n == 2) {
        return 1; //边界值
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i - 1] + val[i - 2];
        } // 将每一个数字都算出来，最后即可解决，不用每一个数都想下递归计算
        return val[n - 1];
    }
}

// 脱离数组的斐波那契
function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}


var start = new Date().getTime();
var res1 = recurFib(1)
var stop = new Date().getTime();
console.log('结果为', res1, '递归耗时:', stop - start);

var start = new Date().getTime();
var res12 = dynFib(0)
var stop = new Date().getTime();
console.log('结果为', res12, '动态规划耗时:', stop - stop);