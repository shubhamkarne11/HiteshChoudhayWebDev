//oop
//object oriented programming
// Encapsulation , inheritance , Polymorphism , Abstraction
//encapsulation ---> You Box them Around They stay together nobody outside knows what happens here.
//inheritance ---> what we get from ither guya just like our parents and ancestors

/*
Encapsulation:
Encapsulation is the concept of wrapping data (properties) and methods (functions) together as a single unit (class). It restricts direct access to some of the object's components, which is a means of preventing unintended interference and misuse.
Example:
class Person {
    #name; // private property
    constructor(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
}
let p = new Person("Alice");
console.log(p.getName()); // Alice

Inheritance:
Inheritance allows a class (child/subclass) to acquire properties and methods from another class (parent/superclass).
Example:
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}
let d = new Dog();
d.speak(); // Animal speaks
d.bark();  // Dog barks

Polymorphism:
Polymorphism means "many forms". It allows methods to do different things based on the object it is acting upon, usually via method overriding.
Example:
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}
let s = new Shape();
let c = new Circle();
s.draw(); // Drawing a shape
c.draw(); // Drawing a circle

Abstraction:
Abstraction means hiding complex implementation details and showing only the necessary features of an object.
Example:
class Car {
    startEngine() {
        // Complex logic hidden
        console.log("Engine started");
    }
    drive() {
        this.startEngine();
        console.log("Car is moving");
    }
}
let car = new Car();
car.drive(); // Engine started \n Car is moving
*/



let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    start: function(){
        return `${this.make} car started in ${this.year}`;
    },
}

// console.log(car.start());














/*  ********************** functional constructor or constructor function  ***********************  */
function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John Doe",20);
// console.log(john.name);















/*  ********************** prototype and prototypal chain   ***********************  */


/*
Prototype and Prototypal Chain:

In JavaScript, every object has a hidden internal property called [[Prototype]], 
which refers to another object. This forms a chain known as the prototype chain. 
When you try to access a property or method on an object, JavaScript will look for it on the object itself. 
If it doesn't find it, it will look up the prototype chain until it finds it or reaches the end (null).

This mechanism allows objects to inherit features from one another.

Example:
*/

// // Creating a constructor function
// function Animal(type) {
//     this.type = type;
// }

// // Adding a method to Animal's prototype
// Animal.prototype.speak = function() {
//     console.log(`This ${this.type} makes a sound.`);
// };

// let dog = new Animal("Dog");
// let cat = new Animal("Cat");

// dog.speak(); // This Dog makes a sound.
// cat.speak(); // This Cat makes a sound.

// // Checking prototype chain
// console.log(dog.__proto__ === Animal.prototype); // true
// console.log(Animal.prototype.__proto__ === Object.prototype); // true







//code starts hitesh sir's
//i can access whole prototypal chain and inject own methods

function Animal(type){
    this.type = this.type;
}

//in this (animal) prototype chain i would like to add method speak
Animal.prototype.speak = function() {
    return `${this.type} makes a sound`;
}


//access array methods
// Array.prototype.hitesh = function () {
// return `Custom method ${this}`;
// };

// let myArray = [1, 2, 3];
// console. log(myArray.hitesh());
// let myNewArray = [1, 2, 3, 4, 5, 6];
// console. log(myNewArray.hitesh());




//the moment functions go inside class it is called as methods

class Vehicle {
    constructor(make , model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}


//inheritance example 
class Car extends Vehicle {
    drive(){
        return `${this.make} : This is example of inheritance`;
    }
}


let myCar = new Car("Toyota", "Canary");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("TOyota", "Canary");
// console.log(vehOne.make);






/*   *****************12.4 starts Encapsulation, polymorphism , abstraction, getters , setters*********  */


//practice bro
//write prototype of animal

// function Machine(sound){
//     this.sound = sound;
// }

// Machine.prototype.makesound = function(){
//     return `${this.sound} comes from a machine`;
// }

// let crackling = new Machine("Cracklingz");
// console.log(crackling.makesound());




//functional constructor
// function groom(name, sound){
//     if(!new.target){
//         return new Error("groom should called without new");
//     }
//     this.name = name;
//     this.sound = sound;
// }

// let big1 = new groom("sandal", "chappak");
// console.log(big1.name);

// let big2 = new groom("sandal2", "chappak2");
// console.log(big2.sound);





//actual code starts here by hitesh sir

//Encapsulation
//i want to restrict the direct access to object data (restricting direct access to data objects / object data)

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

//we doesnt need to pass any value as bankaccount as no constructor is there so we doesnt need to pass the parameter
let account = new BankAccount();
// console.log(account.getBalance());
// console.log(account.deposit(20));
// console.log(account.getBalance());





//Abstraction

class CoffeeMachine {
    start(){
        //call DB
        // filter values
        return `Starting the machine....`;
    }

    brewCoffee(){
        //complex calcuations
        return `Brewing Coffee...`;
    }

    PressButton(){
        let msgone = this.start();
        let msgtwo = this.brewCoffee();
        return `${msgone} + ${msgtwo}`;

        //only writing this.start() returns 
        // undefined because we are not storing it anything like we are 
        // returing in functions so we need to do that

    }
}

let mymachine = new CoffeeMachine();
// console.log(mymachine.start());
// console.log(mymachine.brewCoffee());
// console.log(mymachine.PressButton());











//Polymorphism
//11:19
//11:40 somewhat but 11:19 would be better
//something that can take multiple forms
//13:35

class Bird{
    fly(){
        return `Flying...`;
    }
}

class Penguin extends Bird{
    fly(){
        return `penguins can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());




/* ************static method************ */
//static is method that can be called by class itself nobody else can call 
//nobody should be using it by creating objects
class Calculator {
    static add(a, b){
        return a+b;
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(4,5));

// console.log(Calculator.add(2,4));





/*   ********************************* Getters and setters *************************************/
/*
Getters and Setters:

Getters and setters are special methods that provide controlled access to the properties of an object. 
- A getter allows you to access the value of a property.
- A setter allows you to set or update the value of a property, often with validation or additional logic.

They help encapsulate the internal representation and add logic when getting or setting a value.

Example:
*/
/*
class User {
    constructor(name) {
        this._name = name; // convention: underscore for "private" property
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== 'string' || newName.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newName;
    }
}

let user = new User("Alice");
console.log(user.name); // Alice

user.name = "Bob";
console.log(user.name); // Bob

// user.name = ""; // Throws error: Name must be a non-empty string

*/

//how we are adding the value to that variable and how access the value of that variavle
class Employeee{
    #salary;
    constructor(name, salary){
        if(salary<0){
            throw new Error("Salary Cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary(){
        return `you are not authentic person to view the salary`;
    }

    set salary(value){
        if (value<0) {
            console.log("Invalid salary");
        } else {
            this._salary = value;
        }
    }

}

// let emp = new Employeee("Alice" , -50000)
// console.log(emp._salary);
// emp.salary=-60000;


let emp = new Employeee("Alice" , -50000)
// console.log(emp._salary);
emp.salary=60000;




