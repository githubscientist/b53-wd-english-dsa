// /**
//  * @param {number} totalCandies
//  * @param {number[]} candies
//  * @param {number} i
//  * @return {boolean}
//  */
// var isGreater = function(totalCandies, candies, i){
//     // a. create an assumption / assume that the totalCandies is greater than or equal to all the other kids candies
//     let assumption = true;

//     // b. validate our assumption
//     // iterate the candies array <- index
//     for(let index=0; index<candies.length; index++){
//         // except the index i
//         if(index != i){
//             // and check if the totalCandies < candies[index]
//             if(totalCandies < candies[index]){
//                 // if true => update our assumption to false
//                 assumption = false;
//             }
//         }
//     }

//     // c. return the assumption
//     return assumption;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function(candies, extraCandies) {
//     // a. create / intiailize an empty boolean array <- result
//     let result = [];

//         // b. iterate or traverse the candies array <- i
//         for(let i=0; i<candies.length; i++){
//             // c. for every candies[i]
//                 // find the totalCandies = candies[i] + extraCandies
//             let totalCandies = candies[i] + extraCandies;

//             // d. check if the totalCandies is greater than or equal to all the
//             // other kids candies
//             if(isGreater(totalCandies, candies, i)){
//                 // e. if true => push true to the result array
//                 result.push(true);
//             } else {
//                 // f. else false => push false to the result array
//                 result.push(false);
//             }
//         }
                
//         // g. return the result
//         return result;
// };

/*
    1. Problem Understanding

    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
    
    extraCandies = 3

    result =  [T, T, T, F, T]
            i [0][1][2][3][4]
    

    i = 0
    result[0] is true if 
        candies[0] + extraCandies
        = 2 + 3
        = 5 >= [3, 5, 1, 3]
              [1][2][3][4]
        5 >= 3 true
        5 >= 5 true
        5 >= 1 true
        5 >= 3 true
    or false otherwise

    2. Problem Validation

    3. Algorithm

        a. create / intiailize an empty boolean array <- result

        b. iterate or traverse the candies array <- i
            c. for every candies[i]
                find the totalCandies = candies[i] + extraCandies
            d. check if the totalCandies is greater than or equal to all the
            other kids candies
                e. if true => push true to the result array
                f. else false => push false to the result array

        g. return the result
*/

// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//             }
//         }
//     }
//     return assumption;
// }

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//         for(let i=0; i<candies.length; i++){
//             let totalCandies = candies[i] + extraCandies;
//             if(isGreater(totalCandies, candies, i)){
//                 result.push(true);
//             } else {
//                 result.push(false);
//             }
//         }
//         return result;
// };

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//             }
//         }
//     }
//     return assumption;
// }

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//                 break;
//             }
//         }
//     }
//     return assumption;
// }


// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             assumption = false;
//             break;
//         }
//     }
//     return assumption;
// }

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies){
//     for(let index in candies){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//         for(let i=0; i<candies.length; i++){
//             let totalCandies = candies[i] + extraCandies;
//             if(isGreater(totalCandies, candies)){
//                 result.push(true);
//             } else {
//                 result.push(false);
//             }
//         }
//         return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => result.push(candy + extraCandies >= greatestCandy));
//     return result;
// };


// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => candy + extraCandies >= greatestCandy);
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// time complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};