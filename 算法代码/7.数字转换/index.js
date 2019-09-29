var reverse = function(x) {
    if (x > 0) {
        var x = x.toString().split('')
        var len = x.length - 1
        var mid = Math.floor(len / 2)
        var temp = ''
        for (let i = 0; i <= mid; i++) {
            temp = x[i]
            x[i] = x[len - i]
            x[len - i] = temp
        }
        return Number(x.join(''))
    } else if(x) {
        Math.abs(x)
        var x = x.toString().split('')
        var len = x.length - 1
        var mid = Math.floor(len / 2)
        var temp = ''
        for (let i = 0; i <= mid; i++) {
            temp = x[i]
            x[i] = x[len - i]
            x[len - i] = temp
        }
        return (Number('-' + x.join(''))
    }
}
var res = reverse(1234)
console.log(res)