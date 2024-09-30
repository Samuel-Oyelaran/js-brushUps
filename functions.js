
// Functions in JavaScript
// functions without parameters
// function whenAreWeGoingHome() {
//     console.log("We are going home by 9pm today!");
// }
// whenAreWeGoingHome();

// Playing with function scope
// let userName = "John";
// let age1 = 25;

// // console.log (age1, userName);
// function personDetails() {
//     let age2 = 30; 
//     let catName = "Tom";// local variable
//     let age1 = 35;
//     console.log(age1);
    
// }
// console.log (age1);
// // console.log (age1);
// personDetails();
// console.log (catName);


// function showMessage() {
//     userName = "Bob";
//     let message = "Hello, " + userName;
//     console.log(message);
// }

// Functions with parameters
// - A function to sum two numbers using return
// function sum (firstValue, secondValue){
//     return (firstValue + secondValue);
// }
// console.log(sum(5, 10));

// - A function to sum two numbers using console.log
// function sum (firstValue, secondValue){
//     console.log(firstValue + secondValue);
// }
// sum (5, 10);

//Functions with a default parameter
// function showMessage(from, text = "no text given"){
//     console.log(from + ":" + text);
// }
// showMessage("Sarah", "Hello!");
// showMessage("Sarah");

//Alternative Default Parameter
// function showMessage(text){
//     if (text === undefined){
//         text = "no text given";
//     }
//     console.log(text);
// }
// showMessage();

// function showMessage(from, text = "no text entered") { // parameters: from, text
//     console.log(from +  ":" +text);
//   }
  
//   showMessage('Ann', 'Hello!'); 
// showMessage('Ann', 'You\'re welcome');

//Returning a value from a function
// function sum(a, b) {
//     return a + b;
//   } 
// // console.log (sum (5, 10));
// let result = sum(5, 10);
// console.log(result);

//Having return in many places in a function
// function checkAge(age){
//     if (age >=18){
//         return "You are an adult!";
//     }else {
//         return "You are a minor!";
//     }
// }
// let age = prompt("How old are you?", 18);
// alert(checkAge(age));
 
//a function with an empty return or without it returns undefined
// function nothingDey(){
// return;
// }
// console.log(nothingDey() ===undefined);

//Function  Min(a, b)
//function that returns the least/min of two numbers
// function min(a, b){
//     if (a < b){
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// console.log(min(89.7, 90));
//the function can be written in a shorter way
// function min(a, b){
//     return a<b ? a : b;
// }
// console.log (min(900, 400));

//a function that returns x in power n or x^n
function pow (x, n){
    let result = (Math.pow(x, n));
    return result;
}
console.log (pow(3,2))