function getLastElement(arr) {
    return arr[arr.length - 1];
}
var numbers = [1, 2, 3, 4, 5, 6, 7];
var lastNumber = getLastElement(numbers);
console.log(lastNumber);
var strings = ["BMW", "Opel", "W"];
var lastString = getLastElement(strings);
console.log(lastString);
var mixed = [7, "Nadiia", true];
var lastMixed = getLastElement(mixed);
console.log(lastMixed);
