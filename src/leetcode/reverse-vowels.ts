const vowels = ['a', 'e', 'i', 'o', 'u'];

function reverseVowels(s: string): string {
    let charArray = s.split('');
    let left = 0
    let right = charArray.length - 1;
    while (left <= right) {
        if (vowels.includes(charArray[right]) && vowels.includes(charArray[left])) {
            let temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
        }
        left++;
        right--;

    }
    return charArray.join('');
}

console.log(reverseVowels('hello'))
