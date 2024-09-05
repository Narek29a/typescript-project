var numbersqwe = [1, 3, 5, 4, 7, 8, 9, 10];
function findLengthOfLCIS(nums) {
    var size = 0;
    var tempSize = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            tempSize++;
        }
        else {
            if (tempSize > size) {
                size = tempSize;
            }
            tempSize = 0;
        }
    }
    return size + 1;
}
console.log(findLengthOfLCIS(numbersqwe));
