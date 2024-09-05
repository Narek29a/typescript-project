var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log((function increasedArray(array) {
    var asString = array.join('');
    var asNumber = +asString + 1;
    var asCharArray = (asNumber + '').split('');
    return __spreadArray([], asCharArray, true);
})(['9', '9']));
