/*prototypes are exactly about connections between objects.
They let us reuse methods across all objects without copying.
Constructors + .prototype + .constructor keep these relationships structured.*/
function Person(){
}

function Student(){

}

function Teacher(){

}

Person.prototype = Object.create(Object.prototype)
Student.prototype = Object.create(Person.prototype)
Teacher.prototype = Object.create(Person.prototype)

//If we want to use our function as constructor, we use new keyword

let p = new Student() //new keyword means we are using function as constructor, hence this function will create objects like Number, string etc
console.log(p)
console.log(typeof(p)) //p is object that gets created from Student.prototype
console.log(p.__proto__==Student.prototype)
console.log(p.__proto__.__proto__==Person.prototype)
console.log(p.__proto__.__proto__.__proto__==Object.prototype)
console.log(p.__proto__.__proto__.__proto__.__proto__==null)