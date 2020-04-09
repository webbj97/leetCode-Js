var countCharacters = function(words, chars) {
    let map =  new Map()
    let cnt = 0
    for (let c of chars) {
        map.set(c,map.has(c)? map.get(c)+1:1)
    }
    for (let w of words) {
        if (check(w, new Map(map))) {
            cnt += w.length
        }
    }
    return cnt

};
function check(w, map) {
    for (let i of w) {
        if (map.has(i) && map.get(i)>0){
            map.set(i, map.get(i) - 1)
        }else{
            return false
        }
    }
    return true
}