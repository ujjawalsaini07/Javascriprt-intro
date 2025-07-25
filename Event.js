
//                                  ------- event handeling ----------

// let button = document.querySelector("#myButton");
// function print() {
//     console.log("Hello");
// }

// button.onclick = print; // --> pass the funtion refrence without parentesis

// button.onclick = () => {
//     console.log("Hello");   // syntsx to add an event --> node.event = funtion 
// }


// note we can also do event handeling in inline way
// inline has LESS priority then the external javascript 

// {/* <button onclick = "console.log('hello')">click here</button> */}  ---> this is how to use inline 

// we we add multiple event handler in a single js file the last one overwrites the rest 

//                           --------event object
//  it is a special type of object that is created and it has all the information about that event 

// button.onclick = (evnt) => {
//     console.log(evnt);  // the evet object 
//     console.log(evnt.target);  // target of the event 
//     console.log(evnt.type);  //  --> type of event
//     console.log(evnt.clientX , evnt.clientY);  // --> X and Y position wher the event occured 
    
// }


// let button = document.querySelector("#myButton");

// function print(event) {
//     console.log("Hello");
//     console.log(event); // Logs the event object
// }

// button.onclick = print; browser automatically passes the event object into the print funtion 

//   if we need multiple argument in that print funtion we can use wrapper funtion like this 


// Define the print function which expects multiple arguments
// function print(event, name) {
//      console.log("Hello", name); // Logs "Hello <name>"
//      console.log(event); // Logs the event object
//    }

// function wrapperFunction(event) {
//      const name = "John Doe"; // Extra argument
//      print(event, name);  // Call the original print function with both event and name
// }




// let button = document.querySelector("#myButton");
// function print(event, message) {
//     console.log("Event type:", event.type);
//     console.log("Message:", message);
// }
// // Use a wrapper function to provide additional arguments
// button.onclick = (event) => print(event, "Button clicked!");

//                               ----   event listners 

// button.addEventListener('click', (evt) => {
//      console.log(evt); // Logs the event object
// });

// button.addEventListener('mouseover', function print(event) {
//      console.log(event);
//    });

// button.addEventListner('mouseover', print);    -- > if we want to pass extra argument to the print funtion we can use wrapper funtion 
   




// removing a event listner 
//  button.removeEventListner("click", callback refrence)   --- call back refrence means print type not arrow funtion or any anonmous funtion 
// the call back refrence needs to be the same as

// You can only remove event listeners if you use a function reference that was the same when you added it. For example, you cannot remove an anonymous function or arrow function that was passed to addEventListener because they don't have a reference





