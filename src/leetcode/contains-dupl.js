function containsDuplicate(nums) {
    var countMap = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (!countMap[num]) {
            countMap[num] = 1;
        }
        else {
            countMap[num]++;
        }
    }
    return nums.some(function (item) { return countMap[item] > 1; });
}

console.log(containsDuplicate([1, 2, 3,1]));
