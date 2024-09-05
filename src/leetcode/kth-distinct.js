let arr = ["d", "b", "c", "b", "c", "a"], k = 2;

function kthDistinct(arr, k) {
    let letCountMap = {};

    for (const str of arr) {
        if (!letCountMap[str]) {
            letCountMap[str] = 1;
        } else {
            letCountMap[str]++;
        }
    }

    let uniqueStrings = arr.filter(item => letCountMap[item] === 1);
    return uniqueStrings[k - 1] ? uniqueStrings[k - 1] : "";
}

kthDistinct(arr, k);
