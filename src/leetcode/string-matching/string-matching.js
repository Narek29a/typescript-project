var wordsasd = ["mass", "as", "hero", "superhero"];
function stringMatching(words) {
    var subtrings = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = i + 1; j < words.length; j++) {
            if (words[i].includes(words[j]) || words[j].includes(words[i])) {
                if (words[i].length < words[j].length) {
                    subtrings.push(words[i]);
                }
                else {
                    subtrings.push(words[j]);
                }
            }
        }
    }
    return subtrings;
}
console.log(stringMatching(wordsasd));
