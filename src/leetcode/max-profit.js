var prices = [7, 1, 5, 3, 6, 4];
function maxProfit(prices) {
    var maxProfit = 0;
    var minPrice = prices[0];
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}
console.log(maxProfit(prices));
