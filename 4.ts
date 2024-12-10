function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const lastNumber = getLastElement(numbers);
console.log(lastNumber);

const strings = ["BMW", "Opel", "W"];
const lastString = getLastElement(strings);
console.log(lastString);

const mixed = [7, "Nadiia", true];
const lastMixed = getLastElement(mixed);
console.log(lastMixed);
