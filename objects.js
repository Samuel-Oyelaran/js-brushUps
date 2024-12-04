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

//Nested Cloning
// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
// let clone = Object.assign({ }, user);
// console.log (user.sizes === clone.sizes);//true
// user.sizes.width = 100;
// console.log (clone.sizes.width);//100

// //Method shorthand
// user = {
//     sayHi(){
//         console.log("Hello");
//     }
// };

//This in methods
// const book = {
//     title: "1984",
//     author: "George Orwell",
//     publishedYear:1949,
//     summary (){
//         return `${this.title} was written by ${this.author} in ${this.publishedYear}`;
//     }
// }
// console.log(book.summary());

//Create a calculator
//create  an object calculator with three methods viz read() which prompts for two values and saves them as object properties with names a and b, sum() returns the sum of saved values, mul() multiplies saved values and returns the result
// let calculator = {
//     read(){
//         this.a = +prompt("Enter the first value", 0);
//         this.b = +prompt("Enter the second value", 0);
//     }, 
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//Chaining
// let ladder = {
//     step : 0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down(){
//         this.step--;
//         return this;
//     },
//     showStep(){
        // alert(this.step);
//         return this;
//     }
// };
// ladder.up().up().down().showStep().down().showStep();

// function Car (make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color= color,
//     this.drive = function(){console.log(`"Vroooom!you are driving a ${this.model}`)}
// }

// const car1 = new Car ("Honda", "CrossTour", 2015, "Balck");
// const car2 = new Car ("Toyota", "Camry", 2019, "White");

// console.log  (car1.drive());
// console.log (car2.drive());

// const car1 = new Car("Toyota", "Camry", 2020, "Black");
// let car2 = new Car ("Toyota", "Corolla", 2019, "White");

// console.log(car1.year);
// console.log (car2.color);
// console.log (car2.make);
// }

// //nesting objects in constructor
// function Church (name, location, pastor, yearOfEstablishment){
//     this.name = name,
//     this.location = location,
//     this.pastor = pastor,
//     this.yearOfEstablishment = yearOfEstablishment,
//     this.members = {
//         male : 100,
//         female : 200,
//         children : 250
//     }
// }
// const cityChurch  =  new Church ("Christ Embassy", "Abuja", "Pastor Chris", 1996);
// const orthodoxChurch = new Church ("Celestial Church", "Imeko", "Pastor Oshoffa", 1947);

// console.log (orthodoxChurch.members.female)

