let numbers = new Array(1, 2, 3, 4, 5);

numbers.push(6);
numbers.push(7);

numbers.pop();

numbers.unshift(0);
numbers.unshift(-1);

numbers.shift();

// numbers.splice(3, 0, 2.5);

numbers.splice(4, 1);

// console.log(numbers);

// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }

// let index = 0;
// for (; index < numbers.length; ){
//     console.log(numbers[index]);
//     index++;
// }

// let index = 0;
// while (index < numbers.length){
//     console.log(numbers[index]);
//     index++;
// }

// let index = 0;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);

// for (let index in numbers){
//     console.log(numbers[index]);
// }

// for (let number of numbers){
//     console.log(number);
// }