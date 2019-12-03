function deep(obj) {
    var arr = []
    if(typeof obj !== 'Object'){
        arr = obj
    }else{
        for(var key in obj){
            deep(obj[key])
        }
    }
    return arr
}

var obj = {
    a: '11',
    name: [1,2,3],
    test: '666'
}
var res = deep(obj)
console.log('res:', res);
