let ints = [1, 2, 3, 1], k = 3;
function containsNearbyDuplicate(nums: number[], k: number): boolean {

    for (let i = 0, j = i + 1; i < nums.length && j < nums.length ; i++, j++) {
        if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
            return true;
        }
    }
    return false;
}

console.log(containsNearbyDuplicate(ints, k));
