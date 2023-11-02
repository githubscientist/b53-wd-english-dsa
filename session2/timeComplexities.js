/*
    Problem A
        - Algorithm 1
        - Algorithm 2
        - Algorithm 3
    
    How do we select the best performing algorithm amongst the above 3 algos ?

    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm - performance factors
        - time complexity
            => amount of time taken by an algorithm to run!
        - space complexity
            => amount of space required by an algorithm to run!
    
    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' (Big - Oh) - Upper bound
    2. Big - 'Ω' (Big - Omega) - Lower bound
    3. Big - 'Θ' (Big - Theta) - Tight bound

    Situations/Cases: (Input)

    1. Worst Case
    2. Best Case
    3. Average Case

    Time Complexity: Upper bound, Worst Case, Big - 'O'

    Example: Linear Search Algorithm

        - Searching Algorithm
        - if we need to find and check whether a particular value exists in a given list of values.
        - list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        - key = 11
        - We start with the first element and iterate the list,
        - for every element, we compare that element with the key
        - if the key matches any of the elements, then we return true saying that we found the element
        - else return false saying that we did not find the element

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    Case (first element): If the key = 1, Comparisons => 1 => Best Case => O(1) - abbr: Order of 1 or Oh of 1

    Case (middle element): If the key = 5, Comparisons => 5 => Average Case => O(N/2) => O(N)

    Case (last element): If the key = 10, Comparisons => 10 => Worst Case => O(N)
    Case (element not present): If the key = 11, Comparisons => 10 => Worst Case => O(N)
*/

/*
    Example: 2

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity = ?

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution:

    let a = 0, b = 0; // declarations, initializations, expressions, assignments, conditionals, 
    => O(1), Constant time

    i = 0
    for (; i < N; ) {
        a = a + rand();
        i++
    }

    total executions = values of i
    i = 0, 1, 2, 3, 4, ....., N-1 => N

    Assume that N = 5,
    i = 0, 1, 2, 3, 4 => executions = 5

    Assume that N = 3,
    i = 0, 1, 2 => executions = 3

    => O(N)

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, 5...., M-1 => M

    => O(M)

    total time complexity, T(N, M) = 1 + N + M
                                   = N + M [ since 1 is a constant]
                                   = O(N + M)

*/

/*
    Example: 3

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    let a = 0, b = 0; // O(1)

    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    => O(N)

    for (j = 0; j < N; j++) {
        b = b + rand();
    }
    => O(N)


    Time Complexity, T(N) = 1 + N + N
                          = 1 + 2N
                          = 2N
                          = N
                          = O(N)
*/

/*
    Example: 4

    let a = 0, b = 0; // O(1)
    let M = 3N; // O(1)
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity, T(N) = 2 + N + M
                          = 2 + N + 3N
                          = 2 + 4N
                          = 4N
                          = N
                          = O(N)
*/

/*
    Example: 5

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Solution: First Way
    
    let a = 0, b = 0; => O(1)

    Outer loop => O(N)

    Inner loop => O(N)

    Time complexity, T(N) = 1 + N * N
                          = 1 + N^2
                          = O(N^2)

    Solution: Second Way

    1. Assume some random values of N

    N = 4
    N = 5
    N = 6

    2. Find the number of executions for each of the assumed N value

    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    N = 4,
        i = 0; j = 0, 1, 2, 3 => 4 executions
        i = 1; j = 0, 1, 2, 3 => 4 executions
        i = 2; j = 0, 1, 2, 3 => 4 executions
        i = 3; j = 0, 1, 2, 3 => 4 executions

        total executions = 4 + 4 + 4 + 4 = 16 executions
    N = 5,
        i = 0; j = 0, 1, 2, 3, 4 => 5 executions
        i = 1; j = 0, 1, 2, 3, 4 => 5 executions
        i = 2; j = 0, 1, 2, 3, 4 => 5 executions
        i = 3; j = 0, 1, 2, 3, 4 => 5 executions
        i = 4; j = 0, 1, 2, 3, 4 => 5 executions

        total executions = 5 + 5 + 5 + 5 + 5 = 25 executions
    N = 6,
        i = 0; j = 0, 1, 2, 3, 4, 5 => 6 executions
        i = 1; j = 0, 1, 2, 3, 4, 5 => 6 executions
        i = 2; j = 0, 1, 2, 3, 4, 5 => 6 executions
        i = 3; j = 0, 1, 2, 3, 4, 5 => 6 executions
        i = 4; j = 0, 1, 2, 3, 4, 5 => 6 executions
        i = 5; j = 0, 1, 2, 3, 4, 5 => 6 executions
        
        total executions = 6 + 6 + 6 + 6 + 6 + 6 = 36 executions
    
    
    3. Summarize and find the relationship between the number of executions and the input N (length)

    N = 4, executions = 16
    N = 5, executions = 25
    N = 6, executions = 36

    For the Given N, executions = N^2

    4. Calcaulation of Time Complexity

    T(N) = 1 + N^2
         = O(N^2)

*/

/*
    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Time complexity, T(N) = ?

    N = 4
        i = 0; j = 4, 3, 2, 1 => 4
        i = 1; j = 4, 3, 2 => 3
        i = 2; j = 4, 3 => 2
        i = 3; j = 4 => 1

        executions = 4 + 3 + 2 + 1 = 10
    N = 5

        i = 0; j = 5, 4, 3, 2, 1 => 5
        i = 1; j = 5, 4, 3, 2 => 4
        i = 2; j = 5, 4, 3 => 3
        i = 3; j = 5, 4 => 2
        i = 4; j = 5 => 1

        executions = 5 + 4 + 3 + 2 + 1 = 15
    N = 6

    N = 4, executions = 10
    N = 5, executions = 15
    N = 6, executions = 21
    N = 10, executions = 55

    executions = sum of first N natural numbers
               = 1 + 2 + 3 + 4 + ...+ N-3 + N-2 + N-1 + N

               S(N) = 1 + 2 + 3 + 4 + ... + N-3 + N-2 + N-1 + N
               S(N) = N + N-1 + N-2 + N-3 + ... + 4 + 3 + 2 + 1
         ---------------------------------------------------------------
         
         Adding both the equations above,

                S(N) + S(N) = N+1 + N+1 + N+1 + N+1 + .... + N+1 + N+1 + N+1 N+1
                    2 * S(N) = N * (N+1)
                    S(N) = (N * (N+1))/2

        For a given N, executions = (N * (N+1))/2

        N = 10, executions = (N * (N+1))/2          
                           = (10 * 11)/2
                           = 110/2
                           = 55
        Time Complexity, T(N) = 1 + (N * (N+1))/2
                              = 1 + 1/2 * (N^2 + N)
                              = 1/2 * (N^2 + N)
                              = N^2 + N
                              = N^2 [ N^2 is the highest order polynomial ]
                              = O(N^2)

*/

/*
    let i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    } 

    Time Complexity, T(N) = ?

    Outer loop:
        1 to N => N
        N/2 to N => N/2 + 1

        [5, 10] => 5, 6, 7, 8, 9, 10 => 6
        
        N = 5, 2.5, 3.5, 4.5 => 3
            N/2 + 1 => 2.5 + 1 => 3.5

        executions = N/2 + 1
    
    Inner loop:
        N = 10; j = 2, 4, 8; executions = 3
        N = 29; j = 2, 4, 8, 16; executions = 4
        N = 30; j = 2, 4, 8, 16; executions = 4
        N = 31; j = 2, 4, 8, 16; executions = 4
        N = 40; j = 2, 4, 8, 16, 32; executions = 5


        2^X = N, what raised to the power of 2 approximately equal to N (closest). Solve for X?

        Apply log2 on both the sides,

        log2(2^X) = log2(N) [ log a^b = b log a]
        X log2(2) = log2(N) [ loga(a) = 1]
        X (1) = log2(N)
        X = log2(N)

        For a given N, executions = log2(N) (abbr: log N to the base 2)

        Time Complexity, T(N) = 1 + (N/2 + 1) * log2(N)
                              = 1/2 * N * log2(N) + log2(N)
                              = N * log2(N) + log2(N)
                              = O(N * log2(N))
*/

// console.log(`For N = ${10}, executions = ${Math.log2(10)}`);
// console.log(`For N = ${29}, executions = ${Math.log2(29)}`);
// console.log(`For N = ${30}, executions = ${Math.log2(30)}`);
// console.log(`For N = ${31}, executions = ${Math.log2(31)}`);
// console.log(`For N = ${40}, executions = ${Math.log2(40)}`);

/*
    O(2^N)

    Problem: Given an array of values, find how many ways we can select the values from the array and print all the ways.

    Input: [1, 2, 3]
    Output:

    0 values => ()
    1 values => (1), (2), (3)
    2 values => (1, 2), (1, 3), (2, 3)
    3 values => (1, 2, 3)

    executions = number of ways = 8

    Input: [1, 2, 3, 4]
    Output:

    0 values => ()
    1 values => (1), (2), (3), (4)
    2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    4 values => (1, 2, 3, 4)

    executions = number of ways = 16

    Generalize

    N = 3, executions = 8
    N = 4, executions = 16
    N = 5, executions = 32

    executions = 2^N

    Time Complexity, T(N) = 2^N = O(2^N)

*/

/*
    O(N!)

    Problem: Given a String S, find all the permutations of the string.

    Example:

    Input: "ABC"
    Output: "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"

    Input: "AB"
    Output: "AB", "BA"

    Input: "ABCD"
    Output: "ABCD", "ABDC", "ACBD", "ACDB", "ADBC", "ADCB", "BACD", "BADC", "BCAD", "BCDA", "BDAC", "BDCA", "CABD", "CADB", "CBAD", "CBDA", "CDAB", "CDBA", "DABC", "DACB", "DBAC", "DBCA", "DCAB", "DCBA"

    Generalize:

    N = 3, executions = 6
    N = 2, executions = 2
    N = 4, executions = 24

    executions = N!

    Time Complexity, T(N) = N! = O(N!)

    5! = 5 * 4 * 3 * 2 * 1
       = 120
    
    6! = 6 * 5 * 4 * 3 * 2 * 1
       = 720
*/