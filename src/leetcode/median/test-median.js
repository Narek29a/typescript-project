"use strict";
exports.__esModule = true;
var MedianFinder_1 = require("./MedianFinder");
var medianFinder = new MedianFinder_1.MedianFinder();
medianFinder.addNum(2); // arr = [1]
medianFinder.addNum(3); // arr = [1, 2]
medianFinder.addNum(4); // arr = [1, 2]
medianFinder.addNum(5); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(6); // arr[1, 2, 3]
medianFinder.addNum(7); // arr[1, 2, 3]
medianFinder.addNum(8); // arr[1, 2, 3]
console.log(medianFinder.findMedian());
