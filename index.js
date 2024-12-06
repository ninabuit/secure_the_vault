/* 
- I need to create an alert message
- alert message needs to be a string that says "You have received this 
message because you have been chosen to open an important vault. 
Here is the secret combination:"
- I need to create 3 different variables that equal 10, 40 & 39
- I need to use 3 a arithmetic operators for each variavble
*/ 

const firstNum = 5 * 2;
const secondNum = 20 + 20;
const thirdNum = 40 - 1;
const message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:`;
const allNums = (`${firstNum} ${secondNum} ${thirdNum}`);
const practice = firstNum + 2;
window.alert(`${message} ${allNums}`);

console.log(allNums);
console.log(practice);