const nums: number[] = [-80, 7, 10, 2, 0, 8, 15, 9];

const sumEvenNumbers = (nums: number[]): number => {
  let sum = 0;

  nums.forEach((num) => {
    if (num % 2 === 0) {
      sum += num;
    }
  });

  return sum;
};

console.log(sumEvenNumbers(nums));
