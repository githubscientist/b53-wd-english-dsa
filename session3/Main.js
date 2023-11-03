let Array = require('./Array');

let numbers = new Array();

numbers.push(4);
numbers.push(5);
numbers.push(6);

numbers.forEach((number, index, numbers) => console.log(number, index, numbers));

// console.log(numbers.toArray());

// O(N)
// function main() {
//     let N; // N = 5, 1000000, 
//     for (let i = 1; i <= N; i*=2){
//         if (true) {
//             console.log('true');
//         }
//     }
// }

// function sayHello(N) {
//     for (let i = 1; i <= N; i++){
//         console.log('hello');
//     }
// }

// sayHello(10);

// Recursion