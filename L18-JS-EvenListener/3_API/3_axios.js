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


button.onclick=()=>{
    axios.get(url)
    .then(data=>{
        data = data.data
        console.log(data);
        addToTaskList(data)
    })
    .catch(err=>{
        console.log(err)
    })

}