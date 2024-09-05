function containsDuplicate(nums: number[]): boolean {


    let countMap: any = {};
    for (let num of nums){
        if(!countMap[num]){
            countMap[num] = 1;
        }else{
            countMap[num]++;
        }
    }

    return nums.some(item => countMap[item] > 1);

}
containsDuplicate([1,2,3,1])
