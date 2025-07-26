// async wait >> Promise-chain >> call back hell 

// Synchronous programing means the code runs in a particular sequence of instructions given in the program.Each instruction waits for the previous instruction to complete its execution.

// Due to synchronous programming, sometimes imp instructions getblocked due to some previous instructions, which causes a delay in the User experience.Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow

// console.log("one");
// console.log("two");

// setTimeout(() => {  its an asyncronus funtion in js 
//     console.log("hello")   // --> if we run this code then --> one two three 
// }, 4000);                  //     four hello the code doesnt wait for the 
//                            //      timeout to be over 
// console.log("three");
// console.log("four");

// callbacks --> when one funtion calls another funtion or api or something

// function getData(dataId, getNextData) {   // getNextData is a funtion callback
//   //2s
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData && getNextData === funtion) {  // check is we have passed a funtion or not 
//       getNextData();
//     }
//   }, 2000);
// }

// what we are trying to achive is we want data 1 then after 2s want 2 and so on this is am example of callback hell a problem with funtion callbacks
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {    // callbaeck hell ;
//       getData(4);
//     });
//   });
// });

// promises 

// let promise = new Promise((resolve,reject) =>{   // this is a simple promise it by default have 2 parameter resolve and reject wich are essential for acceptance or rejection
//     console.log("i am a promise");
//     resolve("execited");  // this funtion is created by js its invoked when a promis is fullfilled it changes the state of a promise to fullfilled and any call to change the state of this promise after this is rejected  we can put an if - else to check for logic to resolve and reject a promise 
//     reject("rejected");  // it rejects a promise the "rejected" is passed to the err msg in .catch
// })
// promise.then((res) => {console.log("passes",res)});  // --> this code is exected right after the promisse gets fullfilled 
// promise.catch((err) => {console.log("fail",err)});  // --> this is executed right after a promise gets rejected



// function API(data)  // we are trying to mimik a actual api 
// {
//     return new Promise((resolve,reject) => { 
//         setTimeout(() => {
//             console.log("This is fetched data",data);
//             resolve("succes");
//             reject("network error");

//         }, 4000);
//     })
// }

// let API_call = API(12);   // here we can do API(12) no need of a variable

// API_call.catch((err)=>{
//     console.log("error occured",err);    // if promis does not get fullfilled
// });

// API_call.then((res)=>{
//     console.log("pass",res);          // if promise get fullfilled
// });

// promise chaining method    --> solve callback hell

// function asyncfuntion1(){   // the name is just for a refrence 
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data one Fetched");  
//             resolve("Resolved");
//         }, 2000);
//     } )
// }
// function asyncfuntion2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data two Fetched");
//             resolve("Resolved");
//         }, 2000);
//     } )
// }

// let p1 = asyncfuntion1();
// p1.then((res) => {
//     console.log("Pass",res);
//     let p2 = asyncfuntion2();
//     p2.then((res) => {
//         console.log("Pass",res);
//     })
// })

// writing the above code in a better formate

// asyncfuntion1().then((res) => {
//     console.log(res);
//     return asyncfuntion2();    // better formate to write promise chain 
// }).then((res) => {
//     console.log(res);
// })

// asyn await better than promise chain 

// function getdata(data)
// {
//     return new Promise((resolve,reject) => {
//         console.log("data",data);
//         resolve("resolved");
//         reject("rejected");
//     })
// }

// async function Get_al_data() {    // we have to create another funtion called asyn funtion 
//     await getdata(1);        // await makes the code wait for the promise to be fullfilled before further execution 
//     await getdata(2);        // here each funtion call waits for the promise to be fullfilled
//     await getdata(3);
//     await getdata(4);
//     await getdata(5);   
// }