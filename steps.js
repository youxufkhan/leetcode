
/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num) {
    if(num==0) return 0;
    for(let i = 1; i<100; i++){

        if(num % 2 === 0){
            num = num / 2
        }else{
            num = num - 1
        }

        if(num === 0) return i
    }
};
console.log(numberOfSteps(123))