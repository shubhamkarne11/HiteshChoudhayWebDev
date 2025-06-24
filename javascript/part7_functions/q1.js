// let teaOrder;
// function makeTea(typeOfTea){
//     teaOrder = `Making ${typeOfTea}`;
//     return teaOrder;
// }

// console.log(makeTea("green tea"));
// console.log(teaOrder);

// function makeTea(typeOfTea){
//     return `Making ${typeOfTea}`;
//     // console.log(`Making ${typeOfTea}`);
// }

// let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);




//code 2
// function orderTea(teaType){
//     function confirmOrder(teaType) {
//         let result = `order confirmed for ${teaType}`;
//         console.log(result);
//     }
//     confirmOrder(teaType);
// }

// orderTea("red tea");




// //code 2
// function orderTea(teaType){
//     function confirmOrder(teaType) {
//         return `order confirmed for ${teaType}`;
//     }
//     return confirmOrder(teaType);
// }
// let orderConfirmation = orderTea("red tea");
// console.log(orderConfirmation); 











//arrow function
// //regular function
// function greet(){
//     return "Hello, World!";
// }
// //arrow function
// const greet = () => {

// }


// const calculateTotal = (price , quantity) => {
//     return price * quantity;
// }
// let totalCost = calculateTotal(5, 3);
// console.log(totalCost); // Output: 15




//




// const calculateTotal = (price , quantity) => price * quantity
// let totalCost = calculateTotal(5, 3);
// console.log(totalCost); // Output: 15





//2 remaining challenges

// function processTeaOrder(makeTea){
//     return makeTea("earlgrey");
// }
// function makeTea(typeOfTea) {
//     console.log(`Making ${typeOfTea}`);
// }


// function makeTea(typeOfTea){
//     return `Making tea :  ${typeOfTea}`;
// }

// function processTeaOrder(teaFunc){
//     return teaFunc("earlgrey");
// }

// let order = processTeaOrder(makeTea);
// console.log(order);







// function teaOk(teaType){
//     return `Making ${teaType}`;
// }

// function createTeaMaker(){
//     return function(teaType){
//         return `making ${teaType}`;
//     };
// }

// let teaMaker = createTeaMaker();
// console.log(teaMaker("green tea")); // Output: making green tea

// let teaMaker = createTeaMaker(teaOk);
// console.log(teaMaker); // Output: Making green tea















// function createTeaMaker(name) {
//   let score = 100
//   return function (teaType) {
//     return `Making ${teaType} ${name} ${score}`;
//   };
// }

// let teaMaker = createTeaMaker("hitesh");
// let result = teaMaker("green tea");
// console.log(result) ;
// Output: Making green tea hitesh 100
