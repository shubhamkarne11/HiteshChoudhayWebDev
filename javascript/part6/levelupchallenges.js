// let i = 5;
// let arr1 = [];
// while(i>=1){
//     arr1.push(i);
//     i--;
// }
// console.log(arr1);


// 10.11 bro start
// let arr1 = ["green tea", "black tea", "chai" ,"oolong tea"];
// let arr2 = [];
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]!=="chai"){
//         arr2.push(arr1[i]);
//     }else{
//         break;
//     }
// }

// console.log(arr2);


// let arr1 = ["green tea", "black tea", "chai" ,"oolong tea"];
// let arr2 = [];
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]==="chai"){
//         break;
//     }
//     arr2.push(arr1[i]);
// }

// console.log(arr2);


// let arr1 = ["london", "new york" ,"paris", "berlin"];
// let arr2 = [];
// for(let i =0;i<arr1.length;i++){
//     if(arr1[i]==="paris" || arr1[i]==="Paris"){
//         continue;
//     }else{
//         arr2.push(arr1[i]);
//     }
// }
// console.log(arr2);





//challenge 3
// let numbers = [1,2,3,4,5];
// let smallnumbers = [];

// for (const num of numbers) {
//     if(num === 4){
//         break;
//     }
//     smallnumbers.push(num);
// }
// console.log(smallnumbers);


// let arr1 = ["ab","bc","cd","de"];
// let arr2 = [];
// for(const num of arr1){
//     if(num === "cd"){
//         continue;
//     }
//     arr2.push(num);
// }
// console.log(arr2);



//challenge 5

/*
5. Use a `for-in' loop to loop through an object
containing city populations.
Stop the loop when the population of '"Berlin"' is
found and store all previous cities' populations in a
new object named `cityPopulations'.

let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3500000
};

*/

// let citiesPopulation = {
//     "London": 8900000,
//     "New York": 8400000,
//     "Paris": 2200000,
//     "Berlin": 3500000
// };

// let citypopulation = {};
// // console.log(Object.keys(citiesPopulation));
// // console.log(Object.values(citiesPopulation));

// for (const city in citiesPopulation) {
//     // console.log(citiesPopulation[city]);
//     //key = value
//     if (city == "Berlin"){
//         break;
//     }
//     citypopulation[city] = citiesPopulation[city];
// }

// console.log(citypopulation);





//challenge 7
// let worldCities = {
//     Sydney: 5000000,
//     Tokyo: 9000000,
//     Berlin: 3500000,
//     Paris: 2200000,
// }

// let largeCities = {};

// for (const city in worldCities) {
//     if (worldCities [city] < 3000000) {
//       continue;
//     }
//     largeCities [city] = worldCities [city];
// }

// console.log(largeCities);

    



// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [] ;
    
// teaCollection.forEach((tea) => {
// console.log(tea);
// });


//36:45 10.11   

// let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [] ;

//using function
    
// teaCollection.forEach(function (tea) {
//     if(tea==="chai"){
//         return;
//     }
//     availableTeas.push(tea);    

// });

// console.log(availableTeas);

//using => function 

// teaCollection.forEach((tea) => {
//     if(tea==="chai"){
//         return;
//     }
//     availableTeas.push(tea);    

// });

















