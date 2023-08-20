
// OBJECT

let person = {
    firstName: 'Gopal',
    age:24,
};

console.log(person.firstName);  
console.log(person['age']);

// ARRAY

let arr = [1,2,3,4,5];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
  

// Pre/post increment/decrement operators //

let i = 0;

console.log(++i); //  Pre Increment


console.log(i++); // Post Increment

let k =5;

console.log(--k); // Pre Decrement

console.log(k--); // Post Decrement

// Assignment operators //

let a = 10;

a = a + 5;

console.log(a);

//Comparison operators //

let b = 10;

console.log(a === b);
console.log(a!= b);
console.log(a > b);

// Logical Operators //

console.log(a && b);
console.log(a || b);
console.log(a && b || c);
console.log(a || b && c);

// ternary operator//

let age = 18;

console.log(age >= 18? 'You can vote'   : 'You cant vote' );

