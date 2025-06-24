let pc = {
    cpu : 4
}

let lenova = {
    ram : 18,
}

// Object.setPrototypeOf(lenova, pc);


// console.log(lenova);
// console.log("hello new here start");
// console.log(pc);




// //code by ai

// // Setting up prototype chain using Object.setPrototypeOf
// // This makes 'pc' the prototype of 'lenova'
// Object.setPrototypeOf(lenova, pc);

// // Now, 'lenova' can access properties from 'pc' via prototype chain
// console.log(lenova.cpu); // Output: 4 (inherited from pc)
// console.log(lenova.ram); // Output: 18 (own property)

// // Example: Adding a method to the prototype object
// pc.showSpecs = function() {
//     console.log(`CPU: ${this.cpu}, RAM: ${this.ram}`);
// };

// // Now, lenova can use showSpecs method via prototype
// lenova.showSpecs(); // Output: CPU: 4, RAM: 18

// // Creating another object that inherits from 'pc'
// let dell = Object.create(pc);
// dell.ram = 8;
// dell.showSpecs(); // Output: CPU: 4, RAM: 8

// // Explanation:
// // - 'lenova' and 'dell' both inherit from 'pc'.
// // - If a property is not found on the object itself, JavaScript looks up the prototype chain.
// // - Methods and properties added to the prototype are shared among all inheriting objects.



//my code bro please






