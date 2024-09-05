var askjdjashdsajd = ["bella", "label", "roller"];
function commonChars(words) {
    var firstElemt = words[0];
    var otherWords = words.slice(1);
    var includingDuplicates = [];
    var _loop_1 = function (i) {
        if (otherWords.every(function (word) { return word.includes(firstElemt[i]); })) {
            includingDuplicates.push(firstElemt[i]);
        }
    };
    for (var i = 0; i < firstElemt.length; i++) {
        _loop_1(i);
    }
    return includingDuplicates;
}
console.log(commonChars(askjdjashdsajd));
