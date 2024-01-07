/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length===0) return init;
    // let val = init;
    for(let i=0;i<nums.length;i++){
        init = fn(init, nums[i])
    }
    return init
};

console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr; },0))
console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr * curr; },100))
console.log(reduce([],function sum(accum, curr) { return 0; },25))