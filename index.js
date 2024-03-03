
const { uuid } = require('uuid');
const { v1 } = require('heap-sort-pingaleriddhi');
const { v2 } = require('squared-numbers-pingaleriddhi');

// wordSearch.js
const fs = require('fs');

// Read the word search grid from a file
const grid = fs.readFileSync('wordsearch.txt', 'utf8').split('\n').map(row => row.trim().split(' '));
const wordsToFind = ['apple', 'banana', 'orange', 'grape', 'pineapple']; // Words to search for

function searchWord(word) {
    const directions = [
        [-1, 0], // Up
        [-1, 1], // Up Right
        [0, 1],  // Right
        [1, 1],  // Down Right
        [1, 0],  // Down
        [1, -1], // Down Left
        [0, -1], // Left
        [-1, -1] // Up Left
    ];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            for (const [dRow, dCol] of directions) {
                let found = true;
                for (let i = 0; i < word.length; i++) {
                    const newRow = row + i * dRow;
                    const newCol = col + i * dCol;
                    if (newRow < 0 || newRow >= grid.length || newCol < 0 || newCol >= grid[row].length || grid[newRow][newCol] !== word[i]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log('Word Search Puzzle:');
for (const row of grid) {
    console.log(row.join(' '));
}
console.log('Words to find:', wordsToFind.join(', '));

for (const word of wordsToFind) {
    if (searchWord(word)) {
        console.log(`Found ${word}!`);
    } else {
        console.log(`${word} not found.`);
    }
}
function printBoard() {
    console.log(('\n---------\n'));
}

module.exports = { printBoard };
