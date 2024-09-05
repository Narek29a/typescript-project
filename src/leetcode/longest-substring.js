function longestSubstring(str) {
    var longestCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            var tempLongest = 1;
            for (var j = i + 1; j < str.length; j++) {
                if (str[j] === '0') {
                    tempLongest++;
                }
                else {
                    break;
                }
            }
            if (tempLongest > longestCount) {
                longestCount = tempLongest;
            }
        }
    }
    return longestCount;
}
console.log(longestSubstring('1101100001111000001111001000000011'));
