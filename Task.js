const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = colors.map((_, index, arr) => arr[arr.length - 1 - index]);
console.log(reversedColors); // ['orange', 'yellow', 'green', 'blue', 'red']