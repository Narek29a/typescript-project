let words = ["are", "amy", "u"], left = 0, right = 2;
function vowelStrings(words, left, right) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return words.filter((item, index) => vowels.includes(item[0]) && vowels.includes(item[item.length - 1])).length;
}
new Set().size
console.log(vowelStrings(words))
