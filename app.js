console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = [];
    };
    // info(){

    // };
    // soundOff(){

    // };
    addHobby(hobby){
        this.hobbies.push(hobby);
    };
    removeHobby(hobby){
        this.hobbies.remove(hobby);
    }
    greeting(){
        console.log(`My name is ${this.name} and my hobbies are ${this.hobbies}`);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person{
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting(){
        console.log(`My name is ${this.name} and I am a ${this.occupation}. I have ${this.pets} pets and I live in ${this.residence}.`);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let brandonPerson = new Person("Brandon");
brandonPerson.addHobby("Basketball");
brandonPerson.greeting();

let brandonCoder = new Coder("Brandon", 2, "Colorado");
brandonCoder.greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
class Calculator{
    constructor(result){
        result = 0;
    }
    add(num1, num2){
        var result = num1 + num2;
        return result;
    }
    subtract(num1, num2){
        var result = num1-num2;
        return result;
    }
    multiply(num1, num2){
        var result = num1*num2;
        return result;
    }
    divide(num1, num2){
        var result = num1/num2;
        return result;
    }
    displayResult(result){
        console.log(result);
    }
}

let newCalculator = new Calculator();
let Addition = newCalculator.add(5, 5);
let Subtraction = newCalculator.subtract(5, 5);
let Multiplication = newCalculator.multiply(5,5);
let Division = newCalculator.divide(5,5);
newCalculator.displayResult(Addition);
newCalculator.displayResult(Subtraction);
newCalculator.displayResult(Multiplication);
newCalculator.displayResult(Division);

