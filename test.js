// // var a = new Object()
// const a = [
//     {name: 123, title: '我',subs:[1,2]},{name: 123, title: '我',subs:[1,2]},
//     {name: 1, title: '他',subs:[1,2,3]},{name: 1, title: '你',subs:[1]},
// ]
// function uniqueTitle(arr){
//     const res = new Map();
//     let list = []
//     var aa =  arr.filter(a => {
//         return !res.has(a.title) && res.set(a.title, 1);
//     })
//     var min = aa[0].subs
//     aa.forEach(e => {
//         if(e.subs.length < min.length){
//             min = e
//         }
//     });
//     return min
// }
// var res = uniqueTitle(a)
// console.log(res)


const a = [
    {name: 123, title: '我',subs:[1,2]},{name: 123, title: '我',subs:[1,2]},
    {name: 1, title: '他',subs:[1,2,3]},{name: 1, title: '你',subs:[1]},
]
function unionTitle(a){
    return new Promise((resolve, reject) => {
        resolve(a);
    }).then((val)=>{
        var res = new Map()
        return val.filter(a => {
            return !res.has(a.title) && res.set(a.title, 1);
        })
    }).then((val)=>{
        var min = val[0].subs
        val.forEach(e => {
            if(e.subs.length < min.length){
                min = e
            }
        });
        return min
    })
}

(async function() {
    var res = await unionTitle(a)
    console.log(res,"res")
}());
