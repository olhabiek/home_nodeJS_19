var nums = [-80, 7, 10, 2, 0, 8, 15, 9];
var sumEvenNumbers = function (nums) {
    var sum = 0;
    nums.forEach(function (num) {
        if (num % 2 === 0) {
            sum += num;
        }
    });
    return sum;
};
console.log(sumEvenNumbers(nums));
