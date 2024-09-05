/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let count = 0;
    for (let i = s.length - 1;  count <= i; i--) {
        let temp = s[count];
        s[count] = s[i];
        s[i] = temp;
        count++
    }

    console.log(s)
}

reverseString(["h","e","l","l","o"]);
