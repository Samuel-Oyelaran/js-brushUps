
// Functions in JavaScript
// functions without parameters
// function whenAreWeGoingHome() {
//     console.log("We are going home by 9pm today!");
// }
// whenAreWeGoingHome();

// Playing with function scope
let userName = "John";
function showMessage() {
    userName = "Bob";
    let message = "Hello, " + userName;
    console.log(message);
}
console.log(userName);
showMessage();
console.log(userName);
console.log (userName);