// var n = 1000
// console.log(n);

// var m = 100
// console.log(n + 1);
// console.log(n + 2);
// console.log(n + 3);

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         console.log('当前下标', j)
//     }
// }

// for (let i = 0; i < n; i * 2) {
//     console.log('成对数增长', i)
// }

// for (let i = 0; i < Math.pow(2, n); i++) {
//     console.log('成对数增长', i)
// }

// var res = 0
// for(let i = 1; i < n; i++){
//     res  = res + i //累加
// }

function fn(n) {
    if(n == 0 || n == 1) return n
    return fn(n-1) + fn(n-2)
}

var res = fn(5)
console.log(res,'res')