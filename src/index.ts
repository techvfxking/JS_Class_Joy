// What variables really are (JS mindset)
// In JavaScript, a variable is just a label pointing to a value.
// The value can change, the label stays.

// JS has three ways to create variables:
// var (old, problematic)
// let (modern, mutable)
// const (modern, immutable reference)
// In TypeScript, we still use let and const, but now we also describe what kind of value the variable is allowed to hold.

//let vs const (with TS thinking)
// let age = 25;
// age = 26; // allowed

// const name$ = "Alex";
// // name$ = "John"; // ❌ Error
/*
Explanation:
let → value can change
const → variable reference cannot change
TypeScript does not stop mutation of objects, only reassignment
*/

//Type inference (TypeScript watching silently)
// let age = 25;
//let age: number = 25;
/*
    This is type inference:
    1. You didn’t write : number
    2. TypeScript figured it out
    3. This is usually good enough
*/

//age = "twenty five"; // ❌ Error
// TS says:
// “You told me (implicitly) this is a number. I will defend that contract.”

//Explicit typing (when clarity matters)
// let age: number = 25;
// let name$: string = "Alex";
// let isActive: boolean = true;
/**
 * Use explicit typing when:
    1. Variable is declared first, assigned later
    2. Function parameters
    3. Public APIs
    4. Complex objects
 */
//Without explicit type, this would be dangerous.
// let score: number;
// score = 100;     // ✅
// score = "100";   // ❌

//any keyword in types
//Why any is dangerous (VERY IMPORTANT)
/**
 * TypeScript says:
“I trust you blindly.”
 */
/**
 * This defeats the entire purpose of TypeScript:
    1. No safety
    2. No autocomplete
    3. Runtime crashes sneak back in
    4. Rule to teach: Using any is like turning off your seatbelt because it wrinkles your shirt.
 */
// let data: any = 10;
// data = "hello";
// data = true;
// data();
// data.foo.bar.baz;

// Primitive & Special Types: Now we teach what kinds of values exist. //

//Primitive types

/**
 * JS fact:
 *  1. JavaScript has only one numeric type: `number` (no separate int, float, or double).
 *  2. All numeric values (integers, decimals, etc.) are represented using `number`.
 */

// Declares a variable `age` of type number and assigns it the value 30
// let age: number = 30;

// // Declares a variable `username` of type string and assigns it the text "Alex"
// let username: string = "Alex";

// // Declares a variable `isLoggedIn` of type boolean and assigns it the value false
// let isLoggedIn: boolean = false;

// // Declares a variable `bigNum` of type bigint and assigns it the value 10n (n suffix makes it bigint)
// let bigNum: bigint = 10n;

// // Declares a variable `symbolValue` of type symbol and assigns it a unique symbol with description '1'
// let symbolValue: symbol = Symbol('1');

/**
 * Conceptual difference:
    1. undefined → not assigned yet
    2. null → explicitly empty
 */
// Declares a variable `undefinedValue` of type undefined and assigns it the value undefined
// let undefinedValue: undefined = undefined;

// // Declares a variable `nullValue` of type null and assigns it the value null
// let nullValue: null = null;

// const func = () => {
//     let userName: string | undefined = undefined;
//     userName = "joy";

//     if (userName !== undefined) {
//         console.log(userName.toUpperCase());
//     }
// }
// func();

// 03-01-2026 - Class 2 on TS
//(functions that return nothing)
// function logMessage(message: string): void {
//    console.log(message);
// }
// function logMessage(message: string): string {
//    return message;
// }

// let value = logMessage("Joy To the World");
// console.log(value);

// const logMessage = (message: string):string => {
//    return message;
// }
// const logMessage = (message: string):void => {
//    console.log(message);
// }
/**
 * Meaning:
   Function never completes normally
   No return
   Execution stops
   Used in:
   Exhaustive checks
   Error handling
   Impossible states
 */

// let value = logMessage("Joy");
// console.log(value);
// let value = ((message: string) => {
//    return message + "H";
// })("J");
// console.log(value);

/**
 * Operators & Control Flow
   (JS logic, TS safety)
 */
// let num1: any = 0;
// let num2: number = 0;
// let num3: any = "";

// //Arithmetic & comparison
// num1 = 10; num2 = 20; num3 = "10";
// console.log(`Addition Result: ${num1+num2}`);
// console.log(`Subtract Result: ${num1-num2}`);

// num1 = 12; num2 = 12;
// console.log(`Multiply Result: ${num1*num2}`);

// num1 = 30; num2 = 4;
// console.log(`Division Result: ${num1/num2}`);

// num1 = 30; num2 = 2;
// console.log(`Division Result: ${num1/num2}`);

// num1 = 30; num2 = 2;
// console.log(`Remainder Result: ${num1%num2}`);

// num1 = 30; num2 = 4;
// console.log(`Remainder Result: ${num1%num2}`);
/**
 * Truthy & falsy (JS core idea)
   Falsy values:
   false
   0
   ""
   null
   undefined
   NaN   
 */
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 == num3); // Checks only the Value
// console.log(num1 === num3); //Checks value and type both.

/**
 * Explain:
   JS converts values to boolean in conditions
   TS does not change this behavior
 */

//Class 3 Date 6th Jan 2026
/**TS/JS Conditions */
// const checkBiggerNumber = (num1: number | undefined | null, num2: number | undefined | null): number | null => {
//   if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
//     return null;
//   }

//   let biggerNumber: number | null = null;

//   if (num1 > num2)
//     biggerNumber = num1;
//   else if (num1 < num2)
//     biggerNumber = num2;
//   else
//     biggerNumber = 0;

//   return biggerNumber;
// }

// FUNCTION: checkBiggerNumber
// JOB: Find out which number is bigger!
// INPUT: Two numbers (num1 and num2). They can be real numbers, OR empty (undefined/null)
// OUTPUT: Returns the bigger number. If numbers are the same, returns 0. If one is empty, returns null (nothing)
// const checkBiggerNumber = (num1: number | undefined | null, num2: number | undefined | null): number | null => {
//   // CHECK: Did someone give us empty/nothing as input?
//   if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
//     // YES! We got nothing. So we return null (nothing) to say "I can't compare empty things"
//     return null;
//   }

//   // CREATE: An empty box to put our answer in
//   let biggerNumber: number | null = null;

//   // COMPARE: The difference between num1 and num2
//   // Math.sign() tells us:
//   // - 1 means num1 is bigger (positive difference)
//   // - -1 means num2 is bigger (negative difference)
//   // - 0 means they are the SAME (zero difference)
//   switch (Math.sign(num1 - num2)) {
//     // CASE 1: num1 is bigger
//     case 1:
//       biggerNumber = num1;  // Put num1 in our answer box
//       break;  // Stop checking, we found the answer!
//     // CASE 2: num2 is bigger
//     case -1:
//       biggerNumber = num2;  // Put num2 in our answer box
//       break;  // Stop checking, we found the answer!
//     // CASE 3: They are the same
//     case 0:
//       biggerNumber = 0;  // Put 0 in our answer box to show "they're the same"
//       break;  // Stop checking, we found the answer!
//     default:
//       biggerNumber = null;
//       break;
//   }

//   // RETURN: Give back our answer
//   return biggerNumber;
// }

// const checkBiggerNumber = (num1: number | undefined | null, num2: number | undefined | null): number | null => {
//   if (num1 === undefined || num1 === null || num2 === undefined || num2 === null) {
//     return null;
//   }

//   return num1 > num2 ? num1 : num1 < num2 ? num2 : 0;
// }


// FUNCTION: printf
// JOB: Print something on the screen (like talking!)
// INPUT: Any data (data) - whatever you want to show
// OUTPUT: Nothing (void) - we just show it, don't give anything back
// const printf = (data: any): void => {
//   // COMMAND: Print the data to the screen using console.log
//   console.log(data);
// }

// const main = (): void => {

//   let num1: number = 11;
//   let num2: number = 11;

//   let result: number | null = checkBiggerNumber(num1, num2);

//   if (result === null)
//     printf(`Please enter valid number for check`);
//   else if (result === 0)
//     printf(`Both Number 1: ${num1} and Number 2: ${num2} is same`);
//   else
//     printf(`Biggest number is: ${result}`);

// }


// FUNCTION: main
// JOB: This is the boss function! It runs the whole program!
// INPUT: Nothing
// OUTPUT: Nothing (void) - we just do things, don't give anything back
// const main = (): void => {

//   // CREATE: First number and put 11 in it (like a box with number 11)
//   let num1: number = 11;

//   // CREATE: Second number and put 11 in it (like another box with number 11)
//   let num2: number = 11;

//   // CALL: Ask checkBiggerNumber to find which number is bigger
//   // STORE: Put the answer in a box called result
//   let result: number | null = checkBiggerNumber(num1, num2);

//   // CHECK: What answer did we get? Let's look at each possibility:
//   switch (result) {
//     // CASE 1: We got null (nothing) - means we had empty numbers
//     case null:
//       // ACTION: Print this message to tell the person "something went wrong"
//       printf(`Please enter valid number for check`);
//       break;  // Stop checking other cases

//     // CASE 2: We got 0 - means both numbers are the same
//     case 0:
//       // ACTION: Print this message to say "both numbers are the same"
//       printf(`Both Number 1: ${num1} and Number 2: ${num2} is same`);
//       break;  // Stop checking other cases

//     // CASE 3: We got any other number (1-999 or any real number)
//     default:
//       // ACTION: Print the biggest number we found
//       printf(`Biggest number is: ${result}`);
//       break;  // Stop checking
//   }

// }

// const main = (): void => {

//   let num1: number = 11;
//   let num2: number = 11;

//   let result: number | null = checkBiggerNumber(num1, num2);

//   result === null ? printf(`Please enter valid number for check`) : result === 0 ? printf(`Both Number 1: ${num1} and Number 2: ${num2} is same`) : printf(`Biggest number is: ${result}`);

// }

// RUN IT: Call the main function to start the program!
//main();

//------------------------///////////--------------------------//
/*
  number, string, boolean, symbol, bigint, function

  let num1: joy = 18
 */
// number = joy; ❌
// let num1: joy = 18; ❌

// type TJoy = number | undefined | null; //✅

// let num1: joy = null; //✅

// type TSpecial = "Yes" | "No";
// const test = (value: special) => {
//   if(value === "Yes")
//     return true;
//   else
//     return false;
// }

// console.log(test('Yes'));

// This is a list of different fruits we know about
type TFruit = "Apple" | "Banana" | "Grape" | "Wax Apple" | "Unknown";

// This is a list of different colors
type TColor = "Red" | "Yellow" | "Green" | "White" | "Error";

// This is like a magic box that tells us what color a fruit is!
// We put a fruit name in, and it tells us the color
const returnFruitColor = (fruit: TFruit): TColor => {
  
  // First, we start by saying we don't know the color yet
  // So we set it to "Error" (like when we don't know the answer)
  let color: TColor = "Error";
  
  // Now we check which fruit it is, one by one
  switch (fruit) {
    
    // If it's an Apple...
    case 'Apple':
      color = "Red";  // ...then the color is Red!
      break;  // Stop checking, we found it!
    
    // If it's a Banana...
    case "Banana":
      color = "Yellow";  // ...then the color is Yellow!
      break;  // Stop checking!
    
    // If it's a Grape...
    case "Grape":
      color = "Green";  // ...then the color is Green!
      break;  // Stop checking!
    
    // If it's a Wax Apple...
    case "Wax Apple":
      color = "White";  // ...then the color is White!
      break;  // Stop checking!
    
    // If it's none of these fruits...
    default:
      color = "Error";  // ...we say "Error" because we don't know!
      break;
  }
  
  // Finally, tell everyone what color we found!
  return color;
}


console.log(returnFruitColor('Unknown'));