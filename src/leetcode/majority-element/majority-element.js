var nums = [2, 2, 1, 1, 1, 2, 2];
function majorityElement(nums) {
    var sortedNums = nums.sort(function (a, b) { return a - b; });
    var middleIndex = Math.floor(sortedNums.length / 2);
    var majorityCandidate = sortedNums[middleIndex];
    var count = 0;
    for (var _i = 0, sortedNums_1 = sortedNums; _i < sortedNums_1.length; _i++) {
        var num = sortedNums_1[_i];
        if (num === majorityCandidate) {
            count++;
        }
    }

    console.log('bca'.split('').sort().join(''))

    if (count > sortedNums.length / 2) {
        return majorityCandidate;
    }
    else {
        return null; // No majority element
    }
}
console.log(majorityElement(nums));
