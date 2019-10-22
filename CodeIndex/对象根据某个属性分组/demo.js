var data = [
    { week: '1', name: '1' },
    { week: '1', name: '1' },
    { week: '2', name: '2' },
    { week: '3', name: '3' },
    { week: '3', name: '3' },
    { week: '4', name: '4' },
]
var res = {}

function objToArr(obj, att) {
    let res = {}
    if (obj instanceof Object) {
        var len = obj.length
        for (let i = 0; i < len; i++) {
            if (!res[obj[i][att]]) {
                res[obj[i][att]] = [obj[i]]
            } else {
                res[obj[i][att]].push(obj[i])
            }
        }
        return res
    }
    return res = '分组数据类型错误'
}
var res = objToArr(data,'week')
console.log(res)