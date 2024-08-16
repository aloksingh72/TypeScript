"use strict";
// Dated-->16/Aug/2024
let message = "hello Typescript";
console.log(message);
// decalre a variable and assign a sentence to it and find its length
let sentence = "hello Typescript";
let sentenceLength = sentence.length;
console.log(sentenceLength);
//convert the given string into the upper case
let line = "my name is aloksingh";
let upperLine = line.toUpperCase();
console.log(upperLine);
//Declare a variable longText of type string and assign 
// it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText. 
let longText = "hello this is longtext is used for the filter the substring the 10 characters form the long text. ";
let shortText = longText.substring(0, 10);
console.log(shortText);
//  todo   String Comparison: 
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
let str1 = "aloksingh36757@gmail.com";
let str2 = "aloksingh36757@gmail.com";
let areEqual = str1 === str2;
console.log(areEqual);
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
let product = "Oreo Biscuit";
let price = 10;
console.log(`The product ${product} is priced at ${price} dollars.`);
// TODO: make  a funclion isEven that take a number as perimeter and return true if the number is true and false otherwise
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(9));
// TODO : write a typescript function isDivisibleBy4and8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.
function isDivisibleBy4and8(x) {
    return x % 4 === 0 && x % 8 === 0;
}
console.log(isDivisibleBy4and8(8));
