//variables

//const dateOfBirth = "04dec" ;
/*const year = "1917";

console.log(dateOfBirth)
console.log(year)

 //const name;

let name ;
console.log (name)

name = "TanyMfrosty"
console.log (name)

*/

// operators

//VARIABLES AND DATA TYPES

//1.2 declaring the variable name 

const name = "Tanyaradzwa";
let age = "20" ;// age can change so we used let

console. log (name);
console.log (age);

// 3.Area of a ractangle

const length = 8;
const width = 4;

const area = (length * width);

console.log (area);


//4.Sum of two numbers

 let num1 = 80;
 let num2 = 20;

 const sum = (num1+ num2);
console.log (sum);

// 5.favourite colour
let colour = "Blue" ;
console.log ("My favourite colour is" + " "+ colour );

// 6. Combine first and last name
const firstName= "Tanyaradzwa";
const lastName = "Chiripa";

console.log( firstName + " "+ lastName);


//7. Remainder

 
console.log(17 % 3);

 
//8.String to numbers

const num3 = "25";
const numberAgi = Number (num3);

console.log(numberAgi);

// 9.Swap variables

let a = 20;
let b= 30;

let temp = a ;
 a = b;
 b = temp;

 console.log (a,b);

 // 10. averange of three numbers
 let Y =20
 let X =100
 let Z =80
  const average = (Y + X + Z)/3
  console.log (average)

// INPUT AND OUTPUT

//11. greet user

let fullName = prompt("enter your name :")
console.log("Hello," +  fullName + "!")

//12. Sum of two numbers
let num8 = Number(prompt("enter first number:"));
let num11 = Number(prompt("enter second number"));

console.log(num8 + num11);

// 13. display age

let Age = prompt("enter your age");
console.log("your age is:" + Age);

//14. Celsius Fahrenheit
let celsius = Number(prompt("enter temperature in celcius:"));
let fahrenheit = (celsius * 9/5 + 32);
console.log(celsius + "C = " +  fahrenheit + "F");

//15. Square A Number

let number = Number(prompt ("enter number:"));

console.log("Square:", number ** 2);
//3.CONDITIONAL STATEMENTS

//16. . Determine whether a number is positive or negative.

let vb = Number(prompt("enter the number:"));

switch(true){
  case(vb >= 0):
   console.log("positive");
   break;

  default:
   console.log("negative");
}

//17. Determine whether a number is even or odd.

const evenOddNum =  Number(prompt("enter your number:"));

switch (evenOddNum % 2 === 0) {
  case true:
    console.log("Even");
    break;
  default:
    console.log("Odd");
}



// 18. Print the larger of two numbers.
const p =  Number(prompt("enter your first number:")), q =  Number(prompt("enter your second number:"));
switch (true) {
  case p > q:
    console.log("Larger number:", p);
    break;
  case q > p:
    console.log("Larger number:", q);
    break;
  default:
    console.log("Both are equal");
}

// 19. Check voting eligibility (18+).

const voterAge = 20;
switch (voterAge >= 18) {
  case true:
    console.log("Eligible to vote");
    break;
  default:
    console.log("Not eligible to vote");
}

// 20. Did the student pass? (50 or above)
const score =  Number(prompt("enter your score:"));
switch (score >= 50) {
  case true:
    console.log("Passed");
    break;
  default:
    console.log("Failed");
}

// 21. Leap year check.

const year =  Number(prompt("enter year:"));
const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
switch (isLeap) {
  case true:
    console.log(year, "is a leap year");
    break;
  default:
    console.log(year, "is not a leap year");
}

// 22. Divisible by 5.

const divBy5 =  Number(prompt("enter your number:"));

switch (divBy5 % 5 === 0) {
  case true:
    console.log("Divisible by 5");
    break;
  default:
    console.log("Not divisible by 5");
}

// 23. Assign grades.

const studentScore =  Number(prompt("enter student score:"));
switch (true) {
  case studentScore >= 90:
    console.log("Grade: A");
    break;
  case studentScore >= 80:
    console.log("Grade: B");
    break;
  case studentScore >= 70:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: Fail");
}

// 24. Check whether a character is a vowel.
const char = "e";
switch (char.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(`"${char}" is a vowel`);
    break;
  default:
    console.log(`"${char}" is not a vowel`);
}

// 25. Can three sides form a triangle?
//     Each side must be less than the sum of the other two.
const s1 = 3, s2 = 4, s3 = 5;
const isTriangle = (s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1);
switch (isTriangle) {
  case true:
    console.log("These sides form a triangle");
    break;
  default:
    console.log("These sides do NOT form a triangle");
}


//  4  Logical Operators (26–30)

// 26. Check if a number lies between 1 and 100 (inclusive).
const rangeNum = 57;
switch (rangeNum >= 1 && rangeNum <= 100) {
  case true:
    console.log("Within range");
    break;
  default:
    console.log("Out of range");
}

// 27. Login check (correct username AND password).
const username      = "admin";
const password      = "1234";
const inputUsername = "admin";
const inputPassword = "1234";
switch (inputUsername === username && inputPassword === password) {
  case true:
    console.log("Login successful");
    break;
  default:
    console.log("Login failed");
}

// 28. Driving licence: must be 18+ AND have an ID.

const driverAge = 19;
const hasID     = true;
switch (driverAge >= 18 && hasID) {
  case true:
    console.log("Qualifies for a driving licence");
    break;
  default:
    console.log("Does not qualify");
}

// 29. Divisible by both 3 and 5.

const num29 =  Number(prompt("enter your number:"));
switch (num29 % 3 === 0 && num29 % 5 === 0) {
  case true:
    console.log("Divisible by both 3 and 5");
    break;
  default:
    console.log("Not divisible by both 3 and 5");
}

// 30. Century year check (divisible by 100).

const yearCheck =  Number(prompt("enter the year:"));
switch (yearCheck % 100 === 0) {
  case true:
    console.log(yearCheck, "is a century year");
    break;
  default:
    console.log(yearCheck, "is not a century year");
}


// 5  Loops

// 31. Print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 32. Print numbers from 10 down to 1.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 33. Print all even numbers between 1 and 20.

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 34. Multiplication table of 5.

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 35. Sum of numbers from 1 to 100.

let sum35 =  Number(prompt("enter number:"));
for (let i = 1; i <= 100; i++) {
  sum35 += i;
}
console.log("Sum 1–100:", sum35);       

// 36. Factorial of a number.

const factNum =  Number(prompt("enter factor:"));
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
  factorial *= i;
}
console.log(`${factNum}! =`, factorial); 

// 37. Count numbers divisible by 3 between 1 and 50.

let count37 =  Number(prompt("enter count:"));
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) count37++;
}
console.log("Count divisible by 3:", count37); 

// 38. First 10 multiples of 7.

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// 39. Staircase pattern.

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// 40. Numbers between 1 and 100 divisible by both 3 and 5.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}


//  6 Nested Loops (41–45)

// 41. Print rows of repeated digits
for (let i = 1; i <= 5; i++) {
  console.log(String(i).repeat(5));
}

// 42. 5×5 grid of asterisks.
for (let row = 0; row < 5; row++) {
  console.log("*****");
}

// 43. Incrementing number pattern 
for (let i = 1; i <= 5; i++) {
  let rowStr = "";
  for (let j = 1; j <= i; j++) {
    rowStr += j;
  }
  console.log(rowStr);
}

// 44. Decrementing pattern

for (let i = 5; i >= 1; i--) {
  let rowStr = "";
  for (let j = 5; j >= 5 - i + 1; j--) {
    rowStr += j;
  }
  console.log(rowStr);
}

// 45. 5×5 multiplication table.

for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= 5; col++) {
    line += String(row * col).padStart(4); 
  }
  console.log(line);
}

//  7  Arrays 

// 46. Create an array of five fruits and print it.

const fruits = ["Mango", "Apple", "Banana", "Orange", "Grape"];
console.log(fruits);

// 47. Print the first element.
console.log("First fruit:", fruits[0]);               

// 48. Print the last element.
console.log("Last fruit:", fruits[fruits.length - 1]);

// 49. Loop through the array and print each item.

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 50. Find the largest number in an array.

const numbers = [4, 17, 3, 92, 45, 8];
let largest = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest:", largest);

//  Challenge Problems

// FIZZBUZZ 
for (let i = 1; i <= 100; i++) {
  switch (true) {
    case i % 15 === 0:
      console.log("FizzBuzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
}

// REVERSE AN ARRAY without .reverse()
const original = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = original.length - 1; i >= 0; i--) {
  reversed.push(original[i]);
}
console.log("Reversed:", reversed); 

// COUNT EVEN NUMBERS IN AN ARRAY
const mixedNums = [1, 2, 3, 4, 5, 6, 7, 8];
let evenCount = 0;
for (let i = 0; i < mixedNums.length; i++) {
  if (mixedNums[i] % 2 === 0) evenCount++;
}
console.log("Even count:", evenCount); 

// FIND THE SMALLEST NUMBER
const numArray = [9, 3, 7, 1, 6];
let smallest = numArray[0];
for (let i = 1; i < numArray.length; i++) {
  if (numArray[i] < smallest) {
    smallest = numArray[i];
  }
}
console.log("Smallest:", smallest);

// REMOVE DUPLICATES FROM AN ARRAY 
const withDupes = [1, 2, 2, 3, 4, 4, 5];
const unique    = [];
for (let i = 0; i < withDupes.length; i++) {
  let found = false;
  for (let j = 0; j < unique.length; j++) {
    if (withDupes[i] === unique[j]) {
      found = true;
      break;
    }
  }
  if (!found) unique.push(withDupes[i]);
}
console.log("Unique:", unique); 

// FIND THE SECOND LARGEST NUMBER
const nums   = [4, 17, 3, 92, 45, 8];
let first    = -Infinity; 
let second   = -Infinity;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > first) {
    second = first;    
    first  = nums[i];  
  } else if (nums[i] > second && nums[i] !== first) {
    second = nums[i];
  }
}
console.log("Second largest:", second); 
