let entryArray = [-17, -15, -7, -3, 0, 5, 8, 12, 36];

let firstChunk = entryArray.slice(entryArray.indexOf(0)).map(item => item * item);
let secondChunk = entryArray.slice(0, entryArray.indexOf(0)).map(item => item * item).reverse();

let i = 0;
let j = 0;

const mergedArray = [];

while (i < firstChunk.length && j < secondChunk.length) {
    if (firstChunk[i] < secondChunk[j]) {
        mergedArray.push(firstChunk[i]);
        i++;
    } else {
        mergedArray.push(secondChunk[j]);
        j++;
    }
}
console.log(mergedArray)
