var isPalindrome = function(x) {
    const str = x.toString()
    const length = str.length;
    if(str[0] !== str[length-1]) return false

    const reversed = []
    for(let i = length-1; i>=0; i--){
        reversed.push(str[i])
    }
    if(reversed.join('') === str) return true
    return false;
};
console.log(isPalindrome(1212))