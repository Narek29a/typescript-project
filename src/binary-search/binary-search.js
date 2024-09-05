var array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
function binarySearch(array, target) {
    var left = 0;
    var right = array.length - 1;
    while (left <= right) {
        var mid = Math.floor((right + left) / 2);
        if (target === array[mid]) {
            return mid;
        }
        else if (target > array[mid]) {
            left = mid + 1;
        }
        else if (target < array[mid]) {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(array, 12));
