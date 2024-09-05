var list1 = ["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"];
var list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
function findRestaurant(list1, list2) {
    var prevIndexSum = Number.MAX_SAFE_INTEGER;
    return list1.reduce(function (acc, item, currentIndex) {
        if (list2.includes(item)) {
            var indexOfFoundedItem = list2.indexOf(item);
            var currentIndexSum = currentIndex + indexOfFoundedItem;
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
    }, []);
}
console.log(findRestaurant(list1, list2));
