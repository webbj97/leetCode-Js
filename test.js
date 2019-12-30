var data = []
for(let i = 0; i < 10; i++){
    data[i] = function () {
        console.log('1:', i);
    }
}
data[0]()
data[1]()
data[2]()