
function asd() {
    let obj = {
        include: '5',
        names: ['dwqe', 'asdad', 'qweqwe55'],
        fff: function() {
            return this.names.filter(function (item) {
                return item.includes(this.include);
            });
        },
    }
    return obj;
}
console.log(asd().fff());
