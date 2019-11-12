/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var obj = {}, obj1 = {}
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1
        }else{
            obj[arr[i]]++
        }
    }
    console.log('obj:', obj);
    for(var key in obj){
        if(obj1[obj[key]]){
            return false
        }else{
            obj1[obj[key]] = true
        }
    }
    console.log('obj:', obj1);
    return true
};
var res = uniqueOccurrences([1,2,2,1,1,3])
console.log('res:', res);

