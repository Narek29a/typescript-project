const nums = [2, 2, 1, 1, 1, 2, 2];

function majorityElement(nums: number[]) {

    let sortedNums = nums.sort((a, b) => a - b);
    let asd: string = 'aslkdjklsajdksald'

    const middleIndex = Math.floor(sortedNums.length / 2);
    const majorityCandidate = sortedNums[middleIndex];

    let count = 0;
    for (const num of sortedNums) {
        if (num === majorityCandidate) {
            count++;
        }
    }
    if (count > sortedNums.length / 2) {
        return majorityCandidate;
    } else {
        return null; // No majority element
    }


}


console.log(majorityElement(nums))
