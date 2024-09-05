var vowels = ['a', 'e', 'i', 'o', 'u'];
function reverseVowels(s) {
    var charArray = s.split('');
    var left = 0;
    var right = charArray.length - 1;
    while (left <= right) {
        if (vowels.includes(charArray[right]) && vowels.includes(charArray[left])) {
            var temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
        }
        left++;
        right--;
    }
    return charArray.join('');
}
console.log(reverseVowels('hello'));
