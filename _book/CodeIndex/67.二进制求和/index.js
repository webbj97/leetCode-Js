var addBinary = function(a, b) {
    var aLen = a.length
    var bLen = b.length
    while (aLen < bLen) { //让两个字符串等长，若不等长，在短的字符串前补零，否则之后的操作会超出索引
        a = '0' + a;
        ++aLen;
    }
    while (aLen > bLen) {
        b = '0' + b;
        ++bLen;
    }
    for (let j = a.length - 1; j > 0; --j) { //从后到前遍历所有的位数，同位相加
        a[j] = a[j] - '0' + b[j];
        if (a[j] >= '2') { //若大于等于字符‘2’，需要进一
            a[j] = (a[j] - '0') % 2 + '0';
            a[j - 1] = a[j - 1] + 1;
        }
    }
    a[0] = a[0] - '0' + b[0]; //将ab的第0位相加
    if (a[0] >= '2') { //若大于等于2，需要进一
        a[0] = (a[0] - '0') % 2 + '0';
        a = '1' + a;
    }
    return a;
};

var res = addBinary('1010', '1011')
console.log('res:', res);