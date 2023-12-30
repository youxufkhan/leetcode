/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let ransomArr = ransomNote.split('')
    let magazineArr = magazine.split('')
    let ransomCount = {}
    let magCount = {}
    for (const x of ransomArr) {
        if (!ransomCount[x]) {
            ransomCount[x] = 1
        } else {
            ransomCount[x]++
        }
    }
    for (const x of magazineArr) {
        if (!magCount[x]) {
            magCount[x] = 1
        } else {
            magCount[x]++
        }
    }
    let bool = false;
    for (const x of ransomArr) {
        if ((ransomCount[x] && magCount[x]) && ransomCount[x] <= magCount[x]) {
            console.log(`${x} matched`)
            bool = true
        }
        else {
            return false
        }
    }
    console.log(ransomCount, magCount)
    return bool
};


var canConstructv2 = function (ransomNote, magazine) {
    for(i=0;i<ransomNote.length;i++){
        let bool = magazine.match(new RegExp(`${ransomNote[i]}`, 'g'))?.length >= ransomNote.match(new RegExp(`${ransomNote[i]}`, 'g'))?.length;
        console.log(`${ransomNote[i]}`);
        if(!bool) return false
    }
    return true
}
console.log(canConstructv2('ba', 'aab'))
