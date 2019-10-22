var lengthOfLastWord = function(str) {
    if(!str){
        return 0
    }
    str = str.split(" ")
    var len = str.length-1
    for(var i = len; i >= 0; i--){
        if(str[i]){
            return str[i].length
        }
    }
    return 0
};

var res = lengthOfLastWord("a ")
console.log('长度',res)
