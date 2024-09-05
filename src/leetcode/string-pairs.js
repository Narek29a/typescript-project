const words = ["cd", "ac", "dc", "ca", "zz"];
function maximumNumberOfStringPairs(words){
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] === words[j] || words[i] === reverse(words[j])) {
                count++;
            }
        }
    }
    return count;
}

var reverse = function () {
    return this.split('').reverse().join('');
};

console.log(maximumNumberOfStringPairs(words));
