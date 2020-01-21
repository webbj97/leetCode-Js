var spiralOrder = function(matrix) {
    var len = matrix.length
    var res = []
    for (let i = 0; i < len; i++) {
        if (i % 2 === 0) {
            for(let j = 0; j < matrix[i].length; j++){
                res.push(matrix[i][j])
            }
        }else{
            for(let j =  matrix[i].length-1; j >= 0; j--){
                res.push(matrix[i][j])
            }
        }
    }
    console.log('matrix:', len);
    return res
};

var res = spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

console.log('res', res)