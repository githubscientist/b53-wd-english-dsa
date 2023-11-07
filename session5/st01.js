// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

// returns a valid index if it finds equal adjacent words
// -1 otherwise
function findAdjacentWordsIndex(words) {
    for (let index = 0; index < words.length - 1; index++){
        if (words[index] === words[index + 1]) {
            return index;
        }
    }
    return -1;
}

inp.on("close", () => {
    // convert the sentence to words array
    let words = userInput[0].split(' ');

    let index;

    // iterate the words array until no adjacent words left to remove
    do {
        // find the index of equal adjacent words
        index = findAdjacentWordsIndex(words);

        if (index != -1) {
            // delete the words @ index 'index'
            words.splice(index, 2);
        }
    } while (index != -1);

    console.log(words.join(' '));
});

/*
    Time Complexity = ?

    the outer loop runs until no adjacent words left to remove
    => number of iterations = number of adjacent words
                            = n/2
    
    the inner loop runs until it finds equal adjacent words
    => number of iterations = number of words - 1
                            = n - 1
    
    => Time Complexity = O(n/2 * n - 1)
                       = O(n^2)
*/