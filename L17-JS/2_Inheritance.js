class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Student extends Person{ //Extends link prototypes of student and person.
    constructor(name, age, marks){
        super(name, age)
        this.marks = marks
    }
}

let s = new Student("Aniket", 23, 100)
console.log(s)
console.log(Student.prototype.__proto__==Person.prototype)
console.log(Person.prototype.__proto__==Object.prototype)
console.log(s.__proto__==Student.prototype)
