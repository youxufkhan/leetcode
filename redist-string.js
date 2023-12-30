/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const length = words.length
    if(length == 1) return true
    let totalCharacters = 0;
    for(const word of words){
        totalCharacters += word.length
    }

    if(totalCharacters % length !== 0) return false

    let map = new Map()
    for (const word of words) {
        for (const char of word) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }
    for (const i of map.values()) {
        if (i % length !== 0) {
            return false;
        }
    }
    console.log(map)
    return true;
};

console.log(makeEqual(["abc","aabc","bc"]))
console.log(makeEqual(["ab","a"]))