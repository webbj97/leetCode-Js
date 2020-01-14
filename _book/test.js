var arr = [3, 1, 15, 2, 9, 6, 3, 2, 7, 1]
var res = []
arr.forEach(item => {
    setTimeout(() => res.push(item), item);
});




setTimeout(() => {
    console.log('res:', res);
}, 1000);