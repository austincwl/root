//====1====ObjectDescructuring====
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets);// 8
console.log(yearNeptuneDiscovered);// 1846

//====2====ObjectDescructuring
let planetFacts = {
    numPlanets2: 8,
    yearNeptuneDiscovered: 1846
}

let {numPlanets2, ...discoveryYears} = planetFacts; //

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//====3====ObjectDescructuring
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}); // Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
getUserData({})// Your name is undefined and you like green

//====4====ArrayDescructuring1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//====5====ArrayDescructuring2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers);  // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); 
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//====6====ArrayDescructuring3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

//====7====ES2015 Object Descructuring====

// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };
//
// var a = obj.numbers.a;
// var b = obj.numbers.b;


const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const {a,b} = obj.numbers;

//====8====ES2015 One-Line Array Swap with Destructuring

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0],arr[1]] = [arr[0],arr[1]];

//====9=-===raceResults()

//raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first,second,third,...rest]) => ({first,second,third,rest});
console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));