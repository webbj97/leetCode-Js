Promise.all([
Promise.reject({
    code: 500,
    msg: '服务异常'
}),
Promise.resolve({
    code: 200,
    list: []
}),
Promise.resolve({
    code: 200,
    list: []})
]).then((ret) => {
// 如果其中一个任务是 reject，则不会执行到这个回调。
    RenderContent
        (ret);
}).catch((error) => {
// 本例中会执行到这个回调
// error: {code: 500, msg: "服务异常"}
})