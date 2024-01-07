/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map = {}
    return function (...args) {
        const str = JSON.stringify(args)
        if (str in map) {
            return map[str]
        } else {
            let val = fn(...args)
            map[str] = val
            return val/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map = {}
    return function (...args) {
        const str = JSON.stringify(args)
        if (str in map) {
            return map[str]
        } else {
            let val = fn(...args)
            map[str] = val
            return val
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */