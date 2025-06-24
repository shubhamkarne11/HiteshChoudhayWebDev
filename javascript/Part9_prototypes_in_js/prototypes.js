let computer = {
    cpu : 4,
    screw : 9
}
//type 1 to access prototypes
let lenova = {
    screen : "HD",
    __proto__:computer
};
let dell = {}

// console.log(`lenova` , lenova.__proto__);

let genericcar = {tyres : 4}

let tesla = {
    driver : "AI"
}
//type 2 to access prototypes
Object.setPrototypeOf(tesla , genericcar)

//console.log(`tesla `,tesla);   ---->  prints tesla  { driver: 'AI' }

console.log(`tesla `, Object.getPrototypeOf(tesla)); //tesla having access of its own properties but ou want to access then access with getPrototypeOf(tesla) 




console.log(tesla.hasOwnProperty('driver')); // true
console.log(tesla.hasOwnProperty('tyres'));  // false
console.log(genericcar.hasOwnProperty('tyres'));




