/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let map = new Map()
    for (const [i,c] of Array.from(s).entries()) {
        if (!map.has(c)) {
            map.set(c, [i])
        } else {
            map.get(c).push(i)
        }
    }
    let substring = -1
    for(const c of s){
        const indexes = map.get(c)
        let diff = 0;
        if(indexes.length>1){
            diff = indexes[indexes.length-1] - indexes[0] 
        }
        if(diff> substring) substring = diff
    }
    return substring -1
    
};

console.log(maxLengthBetweenEqualCharacters("aa"))
console.log(maxLengthBetweenEqualCharacters("abca"))
console.log(maxLengthBetweenEqualCharacters("cbzxy"))