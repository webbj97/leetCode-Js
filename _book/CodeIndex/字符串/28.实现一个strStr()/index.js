var strStr = function(str, target) {
    if(!target){
        return 0
    }
    if(target.length > str.length){
        return -1
    }
    for(var i = 0; i< str.length; i++){
        let idx = i;
        if(str[i] == target[0]){
            for(let j = 0; j < target.length; j++){
                if(target[j] == str[idx]){
                    idx++
                }else{
                    break;
                }
            }
            if(idx - i == target.length){
                return i
            }else{
                continue;
            }
        }
    }
    return -1
};
var res = strStr('hello','ll')
console.log(res)
