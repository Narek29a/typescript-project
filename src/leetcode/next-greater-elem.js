var nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];
function nextGreaterElement(nums1, nums2) {
    var result = [];
    for (var i = 0; i < nums1.length; i++) {
        var j = nums2.indexOf(nums1[i]) + 1;
        if (j === nums2.length) {
            result.push(-1);
        }
        for (j; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                result.push(nums2[j]);
                break;
            }
            if (j === nums2.length - 1) {
                result.push(-1);
            }
        }
    }
    return result;
}
console.log(nextGreaterElement(nums1, nums2));
