//  console.log ("Hello World!");
//  let User = 'John';
//  let Age = 25;
//  let message = "Hello";
//  let secondMessage = message;
//  console.log (message);
//  console.log (secondMessage);
// message = "stronghead";
// console.log (message);
// console.log (secondMessage)

// if (true){
//     var test = false;

// }
// console.log (test);

// if (true){
//     let testingPage = true;
// }
// console.log (testingPage);

// Exponentation in Js with ** and Math.pow commands
/**let entity1 = 5;
let entity2 = 2;
let entity3 = Math.pow (entity1, entity2);
console.log(entity3)

let entity4 = Math.pow (entity3, -2);
console.log (entity4);

let entity5 = entity3 ** 2;
console.log (entity5);**/

// String Operator in js
// var age = 25;
// var myInfo = "I am " + age + " years old";
// console.log (myInfo);

// //conditional statements in js
// const x = 15;
// const y = 20;
// if (x==10){
//     console.log ("if!");
//     elseif ((x==15)) {
//         console.log ("else if");

//     }
// }
// let n = 2;

// n *= 3 + 5;//

// n-=10*2;//

// console.log (n);

// Increent and Decrement operators
// let counter = 2;
// alert (counter++);
// alert (counter);

/**Comma Operator**/
// let a = (1 + 2, 3 + 4);

// console.log (a);//7

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`);

// alert(`You are ${age} years old!`); // You are 100 years old!
// let isBoss = confirm("Are you the boss?");
// alert( isBoss);

/*Creating a web-page that asks for a name and outputs it*/
// let firstName = prompt ("What is your name?");
// alert (`You are ${firstName}`);

/*Comparison Operators*/
// String Comparisons
/*alert ('z' > 'a');
alert ('Glowing' > 'Glower');
alert ('Tunde' > "Seyi")
let tunde =5;
let samuel =4;
alert (samuel > tunde);
alert (tunde!=samuel);*/

//Comparison of Different types

// alert (true == 1);
// alert (false == 0);

//Comparison with null and undefined
// alert (null === undefined);
// alert (null == undefined);

//Data type Conversion and their syntaxes
// let value = true;
// alert (typeof value);
// value = value.toString();
// alert (typeof value);
// value = String (false);

/*Numeric Conversion*/
// let numericValue = "150";
// // alert (typeof numericValue);
// let numericValue2 = Number (numericValue);
// console.log (typeof numericValue2);
// console.log (numericValue2);

// let numericValue3 = Number ("150z");
// console.log (numericValue3);//

/*--- Conditionals --*/
// IF ELSE STATMENTS
// let year = prompt("In which year did Samuel graduate?");
// if (year == 2020) {
//   alert("You are correct!");
// } else if (year < 2020) {
//   alert("You are close but still incorrect!");
// } else if ((year = 2021)) {
//   alert("You're almost there but you might want to track back a little");
// } else {
//   alert("You are wrong!");
// }

//Switch Statements:

// let age = prompt("How old are you?"); 
// switch(Number(age)) {
//     case 18:
//     alert ("You are good to go!");
//     break;
//     case 20:
//     alert ("You are not old enough to be in the club!");
//     break;
//     case 21:
//       alert ("Yay.., Right about time!");
//     case 22||23: 
//     alert ("You are old enough to be in the club!");
//     break;
   
//     default:
//    alert ("You cannot enter the club!");

// }

// // Ternary Operator
// let age = prompt("How old are you?");
// let accessAllowed = age >= 18 ? true : false;
// alert(accessAllowed);

//Determining wheter a number is even or odd
// let number = prompt("Enter a number");
// let result = number % 2 === 0 ? "Your entry is an Even number" : "Your entry is an Odd number";
// alert (result);

// let number = prompt("Enter a number", 0);
// if (number % 2 === 0) {
//   alert("Your entry is an Even number");
// } else {alert ("Your entry is an Odd number")};

//Multiple Ternary Operators
// let age = prompt("How old are you?");
// let message = age <5 ? "You are too young":
// age <16 ?  "You are still a minor":
// age === 18 ? "You just attained majority":
// age > 18 ? "You are an adult":
// age > 60 ? "You are a senior citizen" : 
// "Invalid age";
// alert (message);


//Solution to the task on: What's the official name of Javascript
// let officialName = prompt ("What's the \"official\" name of Javascript?");
// if (officialName == "ECMAScript"){
//     alert ("Right!");
//     } else {
//         alert ("You don't know? ECMAScript!");
//     }

//Solution to the task on: Show the sign of a number
// let numberDeterminant = prompt ("Enter a number");
// if (numberDeterminant > 0){
//     alert (1);
// }
// else if (numberDeterminant == 0){
//     alert (0);
// }
// else if (numberDeterminant < 0){
//     alert (-1);
// }
// else {
//     alert ("Invalid entry");
// }

//Rewriting the 'if else' into '?'
// let message ;

// if (login =='Employee'){
//     message = 'Hello';
// } else if (login == 'Director'){
//     message = 'Greetings';
// }else if (login == ''){
//     message = 'No login';
// }else {
//     message = ''
// }

// /*Converting code in line 202 - 210 to '?' */
// let message = (login == 'Employee')?'Hello':
// (login == 'Director')? 'Greetings':
// (login == '') ? 'No login':
// '';
// alert (message);

//Logical Operators
// let hour = 9;
// let minute = 30;
// if (hour < 10 && minute < 18){
//     alert ("The office is closed");
// }
// else {
//     alert ("The office is open");
// }
/*The OR operator*/
// let hour = 9;
// let minute = 30;
// if (hour > 10 || minute > 18){
//     alert ("The office is closed");
// } //it's gonna alert the office is closed because the minute is greater than 18

/*The NOT operator*/
// let isWeekend = true;
// if (!isWeekend){
//     alert ("It's a weekday");
// } else {
//     alert ("It's a weekend");
// } //It's gonna alert "It's a weekday" because the value of isWeekend is true
// alert (typeof isWeekend); //It's gonna alert "boolean" because the value of isWeekend is a boolean

/*writing a code that checks if a number is within a range*/
// let age = prompt ("Enter your age");
// if (age < 14){
//     alert ("You are not up to age");
// }else if (age >= 14 && age <= 90){
//     alert ("You are within the range");
// }
 /*Writing a code that checks if a number is outside a range with Not ! operator*/
// // let age = prompt ("Enter your age");
// // if (!(age >= 14 && age <= 90)){
// //     alert ("You are not within the range");
// // }


// //Check the Login
// let userName = prompt ("Enter your username");
// if (userName == "Admin"){
//     let password = prompt ("Enter your password");
//     if (password == "TheMaster"){
//         alert ("Welcome!");
//     } else if (password == "" || password == null){
//         alert ("Cancelled");
//     } else {
//         alert ("Wrong Password");
//     }
// }   

/*Nullish Coalescing Operator*/
// let height = null;
// let weight = null;
// let area = (height ?? 100) * (weight ?? 50);
// console.log (area); //5000

// let x = (1 && 2) ?? 3;
// console.log (x);

// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

