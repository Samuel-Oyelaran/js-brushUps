//Getting to understand javascript objects

let newFamily = {
    father: "Tunde",
    mother: "Desola",
    son: "Seyifunmi-Darling",
    greetings: () => console.log("Welcome to Our Sweet Family"),
    "happy family": false,

   
}
newFamily["happy family"] = true;
console.log (newFamily["happy family"]);
// newFamily.greetings();
//creating a user input object
let user = {
    name: "John",
    age: 30
};
let anotherThing = prompt("What do you want to know about the user?", "name");
if (anotherThing in user){
    alert (user[anotherThing]);
} else {
    alert("User does not exist");
}
/*the square bracket[] used to access the property above is a dyanmic 
    * way of accessing properties in an object. It is used to access properties
    * that are not known at the time of writing the code. It is used to access
    * properties that are stored in a variable. if the dot notation is used to
    * access the property, it will throw an error because the property is not
    * known at the time of writing the code. The square bracket[] is used to
    */
