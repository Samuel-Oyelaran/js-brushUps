
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
// function pow (x, n){
//     let result = (Math.pow(x, n));
//     return result;
// }
// console.log (pow(3,2));//9
// console.log (pow(1, 100));
// console.log (pow(2, 3));//8.... Great!

//we've gotta do it another way
// function pow(x, n){ 
//     let result = x;
//     for (let i = 1; i < n; i++){
//         result *= x;
//     }
//     return result;
// } 
// console.log (pow(3,4));//81

// // function expression
// let sayHi = function(){
//     console.log("Hello!");
// };
// sayHi()

// Callback functions
//  function doSomething (value){
//     console.log(value.toUpperCase());
//  }
//  doSomething("Hello", function(value){
//      console.log(value);
//  });

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
//   function showOk() {
//     alert( "You agreed." );
//   }
//     function showCancel() {
//         alert( "You canceled the execution." );
//     }
//     // usage: functions showOk, showCancel are passed as arguments to ask
//     ask("Confirm Form ReSubmission!", showOk, showCancel);

    

/*let userPass = confirm ("Do you want to submit this form?");
userPass ? console.log ("Your form has been submitted!") : alert ("Your form has not been submitted!");*/
// sum (displayPage, 1, 2, 3);
// function sum (init, x, y){
//     let result = x + y;
//     init (result);
// }

// function display (result){
//     console.log (result);
// }

// function greet (name, callback){
//     console.log (`Hello, ${name}!`);
//     callback();
// }
// function sayGoodbye(){
//     console.log ("Goodbye!");
// }
// greet ("Samuel", sayGoodbye);//I'm getting it now


// function addNumbers(x, y, callback){
//     let result = x+ y;
//     callback (result);
// }

// function printResult(result){
//     console.log ("The sum of the two numbers is, " + result)
// }
// addNumbers(5, 7, printResult);

//function that sums up  two numbers using callbacks

// function addNumbers (x, y, callback){
//     let result = x + y;
//     callback (result);
// }
// function displayResult (result){
//     console.log ("The sum of the two numbers is, " + result);
// }
// addNumbers(90, 8, displayResult);

// //function that adds two numbers without using callbacks
// function sumNumbers (x,y){
//     let result = x + y;
//     console.log ("The sum of the two numbers you intend to add is" + result);
// }
// sumNumbers(90, 8);

// function expression/function is a value

// let sayHi = /*function expression*/
// function(){
//     alert("Hello!");
// };
// sayHi();//syntax for calling a function
// alert (sayHi); //shows the function code
// let tunde = sayHi;
// tunde();
// sayHi();


