const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const linesArray = input.split('\n');
let leftList = [];
let rightList = [];

linesArray.forEach((line) => {
    numbersArray = line.split('  ');
    leftList.push(numbersArray[0]);
    rightList.push(numbersArray[1]);
});

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

let totalDistance = 0;

for (let i = 0; i < leftList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
}

console.log(totalDistance);