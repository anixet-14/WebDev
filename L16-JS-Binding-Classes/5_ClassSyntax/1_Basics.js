class Person{
    #secret= "So many"
    constructor(name, age){
        this.name=name;
        this.age = age;
    }
    print(){
        console.log(this.name, this.age)
    }
    //Getter and setter acts like property not function
    get getName(){
        return this.name;
    }
    get Secret(){
        return this.#secret
    }
    set setName(newName){
        this.name = newName
    }
}
//class is always used via 'new' object
let p = new Person("Aniket", 23)
console.log(p)

//Class creates a function and this will have a prototype.
console.log(typeof(Person))
console.log(p.__proto__== Person.prototype)
p.print()

console.log(p.getName)
p.setName="Aniket Gupta"
console.log(p.getName)

console.log(p.Secret)