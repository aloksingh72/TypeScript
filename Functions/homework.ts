//! Homework for you Guys..
// Q 1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

// you can use the rest parameter syntax (...args) to accept any number of arguments.
const calculateAverage = (...a: number[]): number =>{
 const total = a.reduce((acc,curr)=> acc+curr,0);
 return total/a.length;
}
console.log(calculateAverage(2,5,6,4,8))

// Q 2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.

const findMaxValue = (...a:number[]):number=>{
    const maxValue = Math.max(...a);
    return maxValue;

}
console.log(findMaxValue(10,20,56,54,60,89))

// 