function hello(name, age){
    console.log(this);
}
let obj1 = {a:1}
let obj2 = {b:2}
//function_name.call(context, arguments)
hello.call(obj2)

function introduce(city, country) {
  console.log(`Hi, I am ${this.name} from ${city}, ${country}`);
}

const person = { name: "Aniket" };

introduce.call(person, "UP ","India"); 
// Hi, I am Aniket from Mumbai, India

introduce.apply(person, ["UP", "India"]); 
// Hi, I am Aniket from Mumbai, India


function greet(greeting, name) {
  console.log(`${greeting}, ${name}! My role is ${this.role}`);
}

const teacher = { role: "Teacher" };

const boundFn = greet.bind(teacher, "Hello"); // only partially applied
boundFn("Aniket"); 
// Hello, Aniket! My role is Teacher
