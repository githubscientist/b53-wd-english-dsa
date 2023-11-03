/*
    Arrays:
        - Arrays are used to store multiple values in a single variable.
        - Arrays uses indices to access elements.
        - index starts from 0 for all the arrays.
        - Arrays are mutable.
        - time complexity:
            - insert/delete from an array -> O(N)
        - random access
        - methods:
            - push: add an element to the end of the array
            - pop: remove an element from the end of the array
            - shift: remove an element from the start of the array
            - unshift: add an element to the start of the array
            - splice: add/remove an element from the middle of the array
            - map: iterate over the array and return a new array
            - reduce: iterate over the array and return a single value
            - filter: to filter out elements from the array
            - find: to find an element in the array
    
    Strings:
        - Strings are used to store a stream of characters in a single variable.
        - Strings are also like an array
        - Strings also uses index to access a particular character.
        - Strings are immutable
*/

// let numbers = [1, 2, 3, 4, 5];
// // console.log(numbers[2]);

// numbers[0] = 10;

// console.log(numbers);

let word = 'apple';

// console.log(word, typeof (word));

// console.log(word[0]);

// word[1] = 'm';

let index = 4;
let char = 'a';

/*
    we have to create a new string with the following pieces:
        - from the start of the string to the index
        'a'
        - the new character
        'm'
        - the rest of the string (from index + 1)
        'ple'
    
    then we simply concatenate the three pieces together to get the new string
*/

word = word.slice(0, index) + char + word.slice(index + 1,);

console.log(word);