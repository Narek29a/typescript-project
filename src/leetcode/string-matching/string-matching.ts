let wordsasd = ["mass","as","hero","superhero"]
function stringMatching(words: string[]): string[] {
    let subtrings: Set<string> = new Set();
    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j++) {
            if (words[i].includes(words[j]) || words[j].includes(words[i])) {
                if (words[i].length < words[j].length) {
                    subtrings.add(words[i]);
                }else{
                    subtrings.add(words[j]);
                }
            }
        }
    }
    return Array.from(subtrings)
}


console.log(stringMatching(wordsasd))
