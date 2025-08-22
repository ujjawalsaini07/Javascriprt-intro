// const student = {
//   name: "ujjawal saini",
//   marks: 100,
//   printfun: function () {   // we can also define an arrow funtion 
//     console.log(this.name, " ", this.marks); // when we write this.something it means student.something this 2 are interchangeble only within the defination of the object
//   },
// }; // ----> GENERAL WAY TO WRITE A OBJECT IN JS

// const employ_genral = {    // general employ funtion this is kind of our base class
//   tax: 10,
//   department: "Marketing",
//   print_details: function () {
//     for (const key in this) {
//       if (typeof this[key] !== "function") {    // this funtion prints the value of the properties of the object execpt the funtion type properties
//         const element = this[key];
//         console.log(key, this[key]);
//       }
//     }
//   },
// };

// const Employ = {    // --> a genralized employ 
//   name: "ujjawal",
//   age: "21",
//   salary: "20000",
// };
// Employ.__proto__ = employ_genral; // ---> We add a object to the prototype of the object Employ here it kind of inherits all the key value pair defined in emloye_genral including the funtion defined 

// Employ.print_details();   

// if both the objects have the same name for a property and a variable then the EX - Employ has its own tax variable then it will dominate over the employ_genral;

class car { // generalized way to define a blue print of a object 
    // define your methods and funtions here 

    fun1(){
        console.log("Hello this is a class");
    }

    fun2()
    {
        console.log("this is fun 2 ");
    }

    brand  = "basic car" 
}


let obj1 = new car(); // we createed a object here of type car 
obj1.fun1()  // we can acces the property of class;

