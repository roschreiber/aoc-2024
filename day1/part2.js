const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const linesArray = input.split('\n');
let leftList = [];
let rightList = [];

linesArray.forEach((line) => {
    numbersArray = line.split('  ');
    leftList.push(parseInt(numbersArray[0]));
    rightList.push(parseInt(numbersArray[1]));
});

let rightCount = {};
let totalSimilarityScore = 0;

rightList.forEach((num) => {
    if (num in rightCount) {
        rightCount[num] += 1;
    } else {
        rightCount[num] = 1;
    }
});

leftList.forEach((num) => {
    if (num in rightCount) {
        totalSimilarityScore += num * rightCount[num];
    }
});
console.log(totalSimilarityScore);
        
