"use strict";
exports.__esModule = true;
exports.MedianFinder = void 0;
var MedianFinder = /** @class */ (function () {
    function MedianFinder() {
        this.arrayOfElements = [];
    }
    MedianFinder.prototype.addNum = function (num) {
        this.arrayOfElements.push(num);
    };
    MedianFinder.prototype.findMedian = function () {
        if (this.arrayOfElements.length % 2 === 0) {
            return (this.arrayOfElements[this.arrayOfElements.length / 2] +
                this.arrayOfElements[this.arrayOfElements.length / 2 - 1]) / 2;
        }
        else {
            return this.arrayOfElements[Math.floor(this.arrayOfElements.length / 2)];
        }
    };
    return MedianFinder;
}());
exports.MedianFinder = MedianFinder;
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
