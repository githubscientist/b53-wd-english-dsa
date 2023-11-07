/*
    Recursion: A function that calls itself!
*/

// Example

// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

/*
    Recursion Tree:

    sayHello()
        - console.log('hello')
        - sayHello()
            - console.log('hello')
            - sayHello()
                - console.log('hello')
                - sayHello()
                    - console.log('hello')
                    - sayHello()
                        ...
                        ...
*/

// Iteration Function
// Example: Print the message 'hello' for N times

// function sayHello(N) {
//     for (let i = 1; i <= N; i++){
//         console.log('hello');
//     }
// }

// sayHello(3);


// function sayHello(N) {
//     if (N == 0) return;

//     console.log('hello');
//     sayHello(N - 1);
// }

// sayHello(3);

/*
    Recursion Tree:

    sayHello(3)
        - N = 3; 3 == 0? No
        - console.log('hello')
        - sayHello(2)
            - N = 2; 2 == 0? No
            - console.log('hello')
            - sayHello(1)
                - N = 1; 1 == 0? No
                - console.log('hello')
                - sayHello(0)
                    - N = 0; 0 == 0? Yes
                    - return
*/

// Exercise: Recursion function to print the numbers from N to 1

/*
    Input: N
    Output: Print the numbers from N to 1
    Example: N = 5
        5
        4
        3
        2
        1

    Input: N = 3
    Output: 
    3 
    2 
    1
*/

// function sayHello(N) {
//     if (N == 0) return;

//     console.log(N);
//     sayHello(N - 1);
// }

// sayHello(3);

/*
    Recursion Tree:

    sayHello(3)
        - N = 3; 3 == 0? No
        - console.log(3)
        - sayHello(2)
            - N = 2; 2 == 0? No
            - console.log(2)
            - sayHello(1)
                - N = 1; 1 == 0? No
                - console.log(1)
                - sayHello(0)
                    - N = 0; 0 == 0? Yes
                    - return
    
    sayHello(3)

*/

// Exercise: Recursion function to print the numbers from 1 to N

// function sayHello(N) {
//     if (N == 0) return;

//     sayHello(N - 1);
//     console.log(N);
// }

// sayHello(3);

/*

    sayHello(3)
        - N = 3; 3 == 0? No
        - sayHello(2)
            - N = 2; 2 == 0? No
            - sayHello(1)
                - N = 1; 1 == 0? No
                - sayHello(0)
                    - N = 0; 0 == 0? Yes
                    - return
                - console.log(1) (waiting for sayHello(0) to finish)
            - console.log(2) (waiting for sayHello(1) to finish
        - console.log(3) (waiting for sayHello(2) to finish)

    sayHello(3)
*/

// Exercise: Recursion function to print the sum of first N natural numbers

/*
    Input: N
    Output: sum of first N natural numbers
    Example: N = 5
        1 + 2 + 3 + 4 + 5 = 15

    Input: N = 3
    Output: 6
*/

// let sum = 0;

// function print(N) {
//     if (N == 0) return sum;

//     sum += N;
//     return print(N - 1);
// }

// console.log(print(5));

// function print(N, sum) {
//     if (N == 0) return sum;

//     return print(N - 1, sum + N);
// }

// console.log(print(5, 0));

/*
    S(N) = ?

    Recurrence Relation: It's a relation that defines the value of a function in terms of the value of the function itself for smaller values of the argument.

    Solve for Recurrence Relation:

    Base Case: 
    
    S(0) = 0
    S(1) = 1

    ------------------------------------------------

    For N = 2, S(2) = 1 + 2 = 3
    For N = 3, S(3) = 1 + 2 + 3 = 6
    For N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    For N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    ------------------------------------------------

    Back Substitution:

    For N = 2, S(2) = S(1) + 2 = 3
    For N = 3, S(3) = S(2) + 3 = 6
    For N = 4, S(4) = S(3) + 4 = 10
    For N = 5, S(5) = S(4) + 5 = 15

    ------------------------------------------------

    General Case:

    For N = 0, S(N) = 0
    For N = 1, S(N) = 1
    For N > 1, S(N) = S(N - 1) + N

*/

function S(N) {
    // For N = 0, S(N) = 0
    if (N == 0) return 0;

    // For N = 1, S(N) = 1
    if (N == 1) return 1;

    // For N > 1, S(N) = S(N - 1) + N
    return S(N - 1) + N;
}

console.log(S(10));

/*
    S(5)
        return S(4) + 5
                |
                |
                return S(3) + 4
                        |
                        |
                        return S(2) + 3
                                |
                                |
                                return S(1) + 2
                                        |
                                        |
                                        return 1
    
    S(5)
                                        
*/