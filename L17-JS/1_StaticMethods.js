//Static members belong to classes.
class Person{
    static addArray(){
        let arr=[1, 2, 3, 4, 5]
        let sum=0;
        for(let i=0; i<arr.length; i++)sum+=arr[i]
        return sum;
    }
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

console.log(Person.addArray())
let p = new Person("Aniket", 23)
//console.log(p.addArray()) //Gives array because object doesn't have this method. It only belongs to class