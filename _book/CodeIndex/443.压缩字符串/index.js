var compress = function(chars) {
    var len = chars.length
    for (var i = 0, j = 0; j < len;) {
        chars[i] = chars[j]
        var temp = j
        while (j < len && chars[i] === chars[j]) {
            j++
        }
        i++
        var dis = j - temp
        if (dis > 1) {
            var distance = Array.from('' + dis)
            for (var k = 0; k < distance.length; k++) {
                chars[i++] = distance[k]
            }
        }
    }
    return i
}


var arr = ["a", "a", "b", "b", "c", "c", "c"]
var res = compress(arr)
console.log('res:', res);