var aaa;
(function (aaa) {
    var _this = this;
    aaa.fff = function () {
        console.log(_this);
    };
})(aaa || (aaa = {}));
aaa.fff();
setTimeout('const number = 5;', 1000);
