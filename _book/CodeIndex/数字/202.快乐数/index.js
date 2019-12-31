var isHappy = function(n) {
    const set = new Set([n]);
    while(!set.has(1)){
        n = (n+'').split('').reduce((acc,item)=> acc + (+item)**2 ,0);
        if(set.has(n)) return false;
        set.add(n);
    }
    return true
};

var res = isHappy(19)
console.log('res:', res);
