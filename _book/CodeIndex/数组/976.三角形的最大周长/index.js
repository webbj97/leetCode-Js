var largestPerimeter = function(arr) {
    arr.sort(function(a, b) { return b - a });
    for (let i = 0; i < arr.length - 2; i++) {
        var a = arr[i],
            b = arr[i + 1],
            c = arr[i + 2];
        if (a < b + c) {
            return (a + b + c);
        }
    }
    return 0;
};

var res = largestPerimeter([3,2,3,4])
console.log('res:', res);
