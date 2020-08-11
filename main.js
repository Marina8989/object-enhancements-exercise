//Object Enhancements Exercise
//In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

//1. Same keys and values

// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

//1. Same keys and values ES2015
/* Write an ES2015 Version */

const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}
console.log(createInstructor('marina', 'altudova'));


//2. Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


//3.Computed Property Names ES2015
/* Write an ES2015 Version */
var favoriteNumber = 42;
var instructor = {
    firstName: "Colt",
    [favoriteNumber] : "That is my favorite!"
}
console.log(instructor);

//4. Object Methods

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

//5. Object Methods ES2015
/* Write an ES2015 Version */
var instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}
console.log(instructor.sayHi())
console.log(instructor.sayBye())


//6.createAnimal function

//Write a function which generates an animal object. The function should accepts 3 arguments:
// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.
  
function createAnimal(species, verb, noise){
  return {
         species,
         [verb]() {
             return noise;
         }
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
    // {species: "dog", bark: ƒ}
    console.log(d.bark())  //"Woooof!"


const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()) //"BAAAAaaaa"
