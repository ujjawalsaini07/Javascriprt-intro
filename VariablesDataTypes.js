// Javascript is a dynamically typed language means we do not have to define the type of variable before assigning any value to them the type of vairable is automatilcally determined during runtime based on the value that is assigned in them 
// Variables can change types during execution.
// This makes dynamically typed languages highly flexible but can lead to runtime errors if types are not handled carefully.


let age = 25;   
let price = 99.99;
let isfollow = true;
let a = null;
let b = undefined;
let fullname = "tony stark";


// variable is case sensative 
// only letter digit _ and $ sign is allowed in the vairable name no space 
//  123varname -- > wrong format $ and _ can occur at first 
// reserved words cannot be variable names 
// use camel case ( fullName )


// let const and var 
// var can be re-declared and updated 
// let cannot be re-declared can be updted 
// const cannot be re-declared or updated 


// let a;   --> means we declared a but didnt give any value to it is undefined 
// const a;  --> gives an error cause const should be declared and instialled at the same time 


// data types is js 
// number string, boolean, null, undefined, Bigint, Symbol 

let bigint1 = BigInt("123");
let symbol1 = Symbol("Hello!");
console.log(typeof symbol1);

// object --> a collection of key value pair 

const student = {
    fullname : "ujjawal",    // every object has a bydefault created inherited object the Prototype in js Almost everything is a OBJECT
    cgpa : 6.23,
    ispass : false,
}

console.log(student);

// 2 ways to access a value using its keys  object.keyname   object["keyname"]
// we can also change the value using the key 


