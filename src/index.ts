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
let num1: any = 0;
let num2: number = 0;
let num3: any = "";

//Arithmetic & comparison
num1 = 10; num2 = 20; num3 = "10";
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