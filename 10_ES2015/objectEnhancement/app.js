//====1===========================================
function createInstructor(firstName, lastName){
    return{
        firstName: firstName,
        lastName: lastName
    }
}

//ES2015 version
function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

//====2=================================================

var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!";

//ES2015 version
let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "42"
}

//====3===============================================
var instructor = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi!";
    },
    sayBye: function(){
        return this.firstName + " says bye!";
    }
}

//ES2015 version
var instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!"
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//====4========================================
function createAnimal(name, vocal, sound){
    return {
        name,
        vocal,
        sound
    }
}

const d = createAnimal("dog", "bark", "Woooof!");
//{species: "dog", bark: f}
d.bark() //"Woooof!"

const s = createAnimal ("sheep", "bleet", "BAAAAaaaa");
s.bleet() //"BAAAAaaaa"