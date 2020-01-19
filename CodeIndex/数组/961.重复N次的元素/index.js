/**
 * @param {number[]} A
 * @return {number}
 */
// var repeatedNTimes = function(A) {
//     var obj = {}
//     A.forEach(item => {
//         if(obj[item]){
//             obj[item]++
//         }else{
//             obj[item] = 1
//         }
//     });
//     for(key in obj){
//         if(obj[key] > 1) return key
//     }
// };

// var repeatedNTimes = function(A) {
//     var arr = A.sort((a, b)=>{
//         return a - b
//     })
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i+1]) return arr[i]
//     }
// };

var repeatedNTimes = function(A) {
    var arr = A.sort((a, b)=>{
        return a-b
    })
    var mid = Math.floor(arr.length/2)-1
    if(arr[mid] == arr[mid-1])return arr[mid]
    return arr[mid+1]
};


var res = repeatedNTimes([9, 5, 3, 3])
console.log('res:', res);
