const string = '11001110010000101000001000';


let longest = 0;
for (let i = 0; i < string.length; i++) {
    if (string[i] === '0') {
        let tempOne = 0;
        tempOne++;
        for (let j = i + 1; j < string.length; j++) {
            if (string[j] === '0') {
                tempOne++;
            } else {
                i = j;
                break;
            }
        }
        if (tempOne > longest) {
            longest = tempOne;
        }
    }
}
console.log(longest);