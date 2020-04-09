function shellSort() {
    var N = arr.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1; //设置间隔
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
                swap(arr, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
}

function swap(array, i, j) { //两个数调换
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}