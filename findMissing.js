const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5];
const result = array1.filter(item => !array2.includes(item));
console.log(result);