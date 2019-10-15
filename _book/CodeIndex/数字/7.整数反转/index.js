var reverse = function(x) {
    var neg = x > 0 ? true : false
    var len = x.length
    var str = x+''
    console.log('长度:', str.length);
    console.log('数字:', x, typeof x);
    console.log('字符串:', str, typeof str);
    
    for(let i = len-1 ; i > 0; i--){
        console.log('x:', str[i]);
        
        console.log(':', Math.pow(10,i));
    }
}
var res = reverse(-1234)
console.log(res)