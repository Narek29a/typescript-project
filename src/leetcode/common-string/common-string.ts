const list1 = ["Shogun","Piatti","Tapioca Express","Burger King","KFC"]
const list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]

function findRestaurant(list1: string[], list2: string[]): string[] {
    let prevIndexSum = Number.MAX_SAFE_INTEGER;
    return list1.reduce((acc: string[], item: string, currentIndex: number): string[] => {
        if (list2.includes(item)) {
            let indexOfFoundedItem: number = list2.indexOf(item);
            let currentIndexSum = currentIndex + indexOfFoundedItem;

            if (currentIndexSum < prevIndexSum) {
                acc = [];
                acc.push(item);
                prevIndexSum = currentIndexSum;
            }
            else if (currentIndexSum === prevIndexSum) {
                acc.push(item);
            }
        }
        return acc;
    }, [])
}

console.log(findRestaurant(list1, list2))
