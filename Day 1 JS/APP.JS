//task1
const name = 'walid'; 
const age = 30; 
const isStudent = false; 
//task2&3
const studentStatus = isStudent ? 'a student' : 'not a student';
const combinedString = `My name is ${name}, I am ${age} years old, and I am ${studentStatus}.`;

console.log(combinedString);
//Task 5: Logical Operators
const myFavoriteAnimal = 'dog';
const myFavoriteColor = 'blue';

const userFavoriteAnimal = prompt('What is your favorite animal?');
const userFavoriteColor = prompt('What is your favorite color?');

if (userFavoriteAnimal.toLowerCase() === myFavoriteAnimal && userFavoriteColor.toLowerCase() === myFavoriteColor) {
  console.log('We have the same favorite animal and color!');
} else {
  console.log('Our favorite animal and/or color is different.');
}
//Task 6: Comparison Operators
const userInput = prompt('5:');
const number = parseFloat(userInput);

if (number > 0) {
  console.log('The number is positive.');
} else if (number < 0) {
  console.log('The number is negative.');
} else {
  console.log('The number is zero.');
}
//Task 8: Truthy & Falsy Values
const userInput = prompt('Enter a value:');
const value = userInput;

if (value) {
  console.log('The value is truthy.');
} else {
  console.log('The value is falsy.');
}







