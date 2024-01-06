/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let result = [];
    let map = new Map();
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && map.get(nums[i]) >= start) {
            result.push(nums.slice(start, i));
            start = i;
        }
        map.set(nums[i], i);
    }

    result.push(nums.slice(start));

    return result;
};
console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]))
console.log(findMatrix([1,2,3,4]))
console.log(findMatrix([8,8,8,8,2,4,4,2,4]))
