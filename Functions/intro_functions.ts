// console.log("hello Duniya:-");
// function fat arrow function 
// const greet = (name:string,id:number)=>{
//     console.log(name,id);
// }
// greet ("Vinod",72);


const isPalindrome = (palin:string):boolean=>{
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin
} 
console.log(isPalindrome("1236321"));