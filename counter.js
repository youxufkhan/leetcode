/**
 * @param {number} n
 * @return {Function} counter
 */
//This is the most efficient solution i could come up with
var createCounter = function(n) {
    return function() {
        return n++
    };
};

// The below example might uses more memory due to closure variable
var createCounterv2 = function(n) {
    let number
    return function() {
        number = (typeof number !== 'number') ? n : number + 1
        return number;
    };
};


 const counter = createCounter(-2)
 console.log(counter()) // -2
 console.log(counter()) // -1
 console.log(counter()) // 0
 console.log(counter()) // 1
 console.log(counter()) // 2

 const counter2 = createCounterv2(-2)
 console.log(counter2()) // -2
 console.log(counter2()) // -1
 console.log(counter2()) // 0
 console.log(counter2()) // 1
 console.log(counter2()) // 2