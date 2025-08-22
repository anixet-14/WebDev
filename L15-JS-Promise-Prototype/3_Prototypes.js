function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log("Hi, I'm " + this.name);
};

let p1 = new Person("Aniket");
p1.sayHi(); // Hi, I'm Aniket

let arr = [1, 2, 3];
console.log(arr.__proto__);        // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype


Object.prototype.knock = function(){
    console.log("Who is there?")
}
let a = [1,2,3,4]
a.knock();
let str = "Hey"
str.knock();