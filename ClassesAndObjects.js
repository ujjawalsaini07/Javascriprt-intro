const student = {
    name: "ujjawal saini",
    marks: 100,
    printfun: function () {
        console.log(this.name," ",this.marks);  // when we write this.something it means student.something this 2 are interchangeble only within the defination of the object
    },
}