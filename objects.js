//Getting to understand javascript objects

// let newFamily = {
//     father: "Tunde",
//     mother: "Desola",
//     son: "Seyifunmi-Darling",
//     greetings: () => console.log("Welcome to Our Sweet Family"),
//     "happy family": false,

   
// }
// newFamily["happy family"] = true;
// console.log (newFamily["happy family"]);
// // newFamily.greetings();
// //creating a user input object
// let user = {
//     name: "John",
//     age: 30
// };
// let anotherThing = prompt("What do you want to know about the user?", "name");
// if (anotherThing in user){
//     alert (user[anotherThing]);
// } else {
//     alert("User does not exist");
// }
/*the square bracket[] used to access the property above is a dyanmic 
    * way of accessing properties in an object. It is used to access properties
    * that are not known at the time of writing the code. It is used to access
    * properties that are stored in a variable. if the dot notation is used to
    * access the property, it will throw an error because the property is not
    * known at the time of writing the code. The square bracket[] is used to
    */
//Property existence test... 'in' operator
// let user = {};
// console.log(user.noSuchProperty === undefined);
// console.log("noSuchProperty" in user);

// The 'for...in' loop
// let user={
//     name: "John",
//     age: 30,
//     isAdmin: true
// }
// for (let properties in user){ // the 'key' in object is replaed with properties as it can be replaced with any variable
//     console.log (properties);
//     console.log(user [properties]);
// }
//special order in 'for...in' loop for objects
// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
// };//once the code is made a non-integers, the order will be as it is in the object
// for (let code in codes){
//     console.log(code);//1, 41, 44, 49
// }
// let user = {
//     name: "John", surname: "Smith",
// }
// user.age = 25;
// for (prop in user){
//     console.log(user[prop]);
// }

//Summing up object properties
// let salaries = {John: 100, Ann: 160, Pete: 130};
// let sum = 0;
// for (let key in salaries){
//     sum += salaries[key];
//     }
//     console.log(sum);

// // multiply numeric properties by 2
// let menu = {width: 200, height: 300, title: "My menu"};
// function multiplyNumeric(menu){
//     for (let key in menu){
//         if (typeof menu[key] === 'number'){
//            return   menu[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log (menu[key]);

//Object reference and copying 
//object comparison
// const object1 = {name:"Tunde", age: 20};
// const object2 = {name:"Tunde", age: 20};
// console.log(object1 === object2);//false

// let message = "Hello";
// let phrase = message;
// console.log (phrase === message);//true

//using the "Object.assign" method
// let user = {name : "Tunde"};
// let permission1 = {canView: true};
// let permission2 = {canEdit: true};
// user.name = "Olawale";
// Object.assign (user, permission1, permission2);
// alert (JSON.stringify(user));
// alert (user.canEdit);
// alert (user.canView);
// alert (user.name);