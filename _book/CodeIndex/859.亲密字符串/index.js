/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    //字符串长度不等就不用比较了
    //同一个下标元素不同只能有2次
    // 所有元素都一一对应也要考虑 ab和ab 
    if(A.length !== B.length){
        return ;
    }

    var count = 0

    if(A === B){
        for()
    }else{
        for(let i = 0; i < A.length; i++){
            if(A[i] !== B[i] ){
                count++
            }
        }
        if(count == 2){

        }
    }
};

var res = buddyStrings("aaaaaaabc", "aaaaaaacb")
console.log('res:', res);
