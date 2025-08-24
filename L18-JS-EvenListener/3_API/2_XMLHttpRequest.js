let url = 'https://jsonplaceholder.typicode.com/todos';

let taskList = document.querySelector('#taskList');
let button = document.querySelector('button');

function addToTaskList(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let li = document.createElement('li');
        li.innerText = element.title;
        taskList.appendChild(li);
    }
}

let xhr = new XMLHttpRequest();
xhr.open("GET", url);

button.onclick = () => {
    xhr.send(); // ✅ call send properly
};

xhr.onload = (data) => {
    data = data.currentTarget.response; // ✅ parse JSON
    //console.log(data); 
    console.log(typeof(data)) //Data is in string, to convert this in object
    data = JSON.parse(data) //JSON = JS object Notation
    console.log(data)
    console.log(typeof(data)) //Now it is Object
   addToTaskList(data); // ✅ show data in list
};

xhr.onerror = () => {
    console.log("Request failed!");
};
