//This happens automatically
let person = {
  name: "Aniket",
  sayName: function () {
    console.log(this.name); //'this' is actually 'Execution context' reference
  }
};

person.sayName(); //this will point the obj which calls the function