var words = ["qwer", "Hello", "Alaska", "jkl", "Dad", "Peace", "zxc"];
function findWords(words) {
    var firstRow = 'qwertyuiop';
    var secondRow = 'asdfghjkl';
    var thirdRow = 'zxcvbnm';
    var oneLineWords = [];
    words.forEach(function (word) {
        var isFirstRowNotContains = word.toLowerCase().split('').some(function (char) { return !firstRow.includes(char); });
        var isSecondRowNotContains = word.toLowerCase().split('').some(function (char) { return !secondRow.includes(char); });
        var isThirdRowNotContains = word.toLowerCase().split('').some(function (char) { return !thirdRow.includes(char); });
        if (!isFirstRowNotContains || !isSecondRowNotContains || !isThirdRowNotContains) {
            oneLineWords.push(word);
        }
    });
    return oneLineWords;
}
console.log(findWords(words));
