//                      ------ funtions in js ------

// function printjs(msg){
//     console.log(`Hii the msg is ${msg}`);
// }

// printjs(123); 

//arrow funtion storing a funtion inside a variable 
const arrowfuntion = (a, b) => {
    // do something with a and b 
    return a + b;
};

let sum = arrowfuntion(1, 2);

                                        // diffrent methods of array 
// foreach in arrays 

let arra = ["delhi", "mumbai", "kolkata"];

function printtoupper(val) {
    console.log(val.toUpperCase());
}

arra.forEach(printtoupper);  // we pass a refrence not a funtion call 

// we can also put the funtion defination in place of the funtion refrence 
arra.forEach((val, idx, arr) => {
    console.log(val, idx, arr)  // it automatically passes the value the index and the complete array to the funtion inside 
})


// map method

let uppercaseArray = arra.map((val, idx, arr) => {
    return val.toUpperCase();   // it returns an array 
})

console.log(uppercaseArray);

// filter method  ->> study from mdn 
// reduce method  ->> study from mdn 
