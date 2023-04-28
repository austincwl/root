//quick question 1
console.log(new Set([1,1,2,2,3,4]));
/*
This returns a set object, of keys 0 to 3 and values 1 to 4 respectively
*/

//quick qustion 2
console.log([...new Set("referee")].join(""));
/*
This returns a refrence error
*/

//quick question 2
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m);
/*
This returns a map object that has two entries,
each entry has two keys, an array and a boolean
*/

//hasDuplicate

console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false