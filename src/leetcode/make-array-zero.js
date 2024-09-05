let nums = [1, 5, 0, 3, 5];

function minimumOperations(nums) {
    let min = smallestNonZero(nums);
    let operations = 0;
    while (!nums.every(item => item === 0)) {
        nums = nums.map(item => {
            if (item - min < 0) {
                return 0;
            }
            return item - min;
        })
        min = smallestNonZero(nums);
        operations++;
    }
    return operations;
}


function smallestNonZero(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0 && nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

console.log(minimumOperations(nums))
