/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    var count = 0;
    for (var i = s.length - 1; count <= i; i--) {
        var temp = s[count];
        s[count] = s[i];
        s[i] = temp;
        count++;
    }
    console.log(s);
}
reverseString(["h", "e", "l", "l", "o"]);
