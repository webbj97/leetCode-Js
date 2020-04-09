var compressString = function(S) {
    let len = S.length
    if (len < 3) return S
    let res = ''
    res += S[0]
    let t = 0
    for (var i = 1; i < len; i++) {
        if (S[i] !== S[i - 1]) {
            res += (i - t)
            t = i
            res += S[i]
        }
    }
    res += (i - t)

    return res.length < len ? res : S
};


var str = "aabcccccaa"
var res = compressString(str)
console.log('res:', res);