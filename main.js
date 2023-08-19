

// DATA TYPES EXEMPLE    // DATA TYPES EXEMPLE   // DATA TYPES EXEMPLE    // DATA TYPES EXEMPLE   // DATA TYPES EXEMPLE   // DATA TYPES EXEMPLE


let age = 25;
let price = 9.99;





let name = "John Doe";
let message = 'Hello, World!';



let isTrue = true;
let isFalse = false;





let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];





let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };





  function add(a, b) {
    return a + b;
  }





  let emptyValue = null;



  let undefinedValue;


  let id = Symbol('id');



  let currentDate = new Date();


  let myMap = new Map();
myMap.set('key', 'value');


let mySet = new Set();
mySet.add('item');


let myPromise = new Promise((resolve, reject) => {

  });


  
  
  
  let multiply = function(a, b) {
    return a * b;
  }
  


  let square = (x) => x * x;


  let greeting = `Hello, ${name}!`;





//   HOISTING EXEMPLE   //   HOISTING EXEMPLE    //   HOISTING EXEMPLE    //   HOISTING EXEMPLE    //   HOISTING EXEMPLE    //   HOISTING EXEMPLE


console.log(x); 
var x = 5;
console.log(x); 



foo(); 
function foo() {
  console.log("Hello, World!");
}


console.log(x); 
let x = 5;




func();
var func = function() {
  console.log("Function Expression");
};





func1(); 
func2(); 

function func1() {
  console.log("Function Declaration");
}

var func2 = function() {
  console.log("Function Expression");
};









function example() {
    console.log(x); 
    var x = 10;
    console.log(x); 
  }
  
  example();






  var foo = 5;
function foo() {
  console.log("Function");
}
console.log(typeof foo);




let foo = 5;
function foo() {
  console.log("Function");
}
console.log(typeof foo);











// IF ELSE EXEMPLE  // IF ELSE EXEMPLE  // IF ELSE EXEMPLE   // IF ELSE EXEMPLE   // IF ELSE EXEMPLE  // IF ELSE EXEMPLE   // IF ELSE EXEMPLE



let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}






let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not yet an adult.");
}






let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature <= 30 && temperature >= 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's a bit chilly.");
}





let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Your grade is ${grade}`);




let username = "user123";
let password = "pass123";

if (username === "user123" && password === "pass123") {
  console.log("Welcome, user!");
} else {
  console.log("Invalid username or password.");
}








let num = 5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}









let a = 10;
let b = 5;
let c = 15;

if (a > b) {
  if (a > c) {
    console.log("a is the largest.");
  } else {
    console.log("c is the largest.");
  }
} else {
  if (b > c) {
    console.log("b is the largest.");
  } else {
    console.log("c is the largest.");
  }
}







let isMember = true;
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}%`);










// SCOPE EXEMPLE  // SCOPE EXEMPLE  // SCOPE EXEMPLE  // SCOPE EXEMPLE  // SCOPE EXEMPLE  // SCOPE EXEMPLE  // SCOPE EXEMPLE  // SCOPE EXEMPLE



let globalVar = "I'm global";

function showGlobalVar() {
  console.log(globalVar); // "I'm global"
}

showGlobalVar();





function localScopeExample() {
    let localVar = "I'm local";
    console.log(localVar); // "I'm local"
  }
  
  localScopeExample();









  if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // "I'm in a block"
  }









  let outerVar = "I'm outer";

function outerFunction() {
  let innerVar = "I'm inner";
  console.log(innerVar);
  console.log(outerVar); 
}

outerFunction();





let outsideVar = "I'm outside";

function shadowingExample() {
  let outsideVar = "I'm inside";
  console.log(outsideVar); 
}

shadowingExample();
console.log(outsideVar);










let x = 10;

function hoistingScopeExample() {
  console.log(x);
  let x = 20;
  console.log(x);
}

hoistingScopeExample();
console.log(x);









// FUNCTION EXEMPLE   // FUNCTION EXEMPLE   // FUNCTION EXEMPLE   // FUNCTION EXEMPLE   // FUNCTION EXEMPLE   // FUNCTION EXEMPLE  // FUNCTION EXEMPLE




 
 



function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet("John");





  let greet = function(name) {
    console.log(`Hello, ${name}!`);
  };
  

  greet("Jane");










  let greet = name => console.log(`Hello, ${name}!`);

greet("Alice");





function add(a, b) {
    return a + b;
  }
  
  let result = add(3, 5);
  console.log(result);





  function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greet(); 
  greet("Tom");






  function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3)); 
  console.log(sum(5, 10, 15, 20));









  function multiplyBy(factor) {
    return function(num) {
      return num * factor;
    };
  }
  
  let double = multiplyBy(2);
  console.log(double(5));









//   TYPE CONVERTION EXEMPLE  //   TYPE CONVERTION EXEMPLE  //   TYPE CONVERTION EXEMPLE  //   TYPE CONVERTION EXEMPLE  //   TYPE CONVERTION EXEMPLE




let num = 5;
let str = "10";

let result = num + str;
console.log(result);



let str = "123";
let num = Number(str); // or parseInt(str) for integers

console.log(num + 7);









let num = 42;
let str = String(num);

console.log(str + " is a number");








let value = "Hello";
let booleanValue = Boolean(value);

console.log(booleanValue);













let strNum = "42.5";
let intNum = parseInt(strNum);
let floatNum = parseFloat(strNum);

console.log(intNum); 
console.log(floatNum);






let num = 7;
let message = `I have ${num} apples.`;

console.log(message);