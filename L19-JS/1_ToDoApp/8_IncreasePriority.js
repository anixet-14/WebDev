//If there is initially inside the array of todo, it should be there
//Hence, we are adding a static function inside ToDo class

let input = document.querySelector('input')
let button = document.querySelector('button')

//Select the task list
let taskList = document.querySelector('ul')

function addTaskToTaskList(inputData){
    //Add data to list
        //1. Create Li element
        let li = document.createElement('li')
        //2. Add input data to li item
        li.innerText = inputData
        //3. Create Four Buttons ⬇️⬆️❌📝
        // //Method-1
        // let buttonsData = ['⬇️','⬆️','❌','📝']
        // for (let i=0; i<buttonsData.length; i++){
        //     const element=buttonsData[i]
        //     li.appendChild(element)
        // }

        //Method -2
        let btn1 = document.createElement('button')
        btn1.innerText='⬇️'
        btn1.classList.add('decrease-priority')

        let btn2 = document.createElement('button')
        btn2.innerText='⬆️'
        btn2.classList.add('increase-priority')

        let btn3 = document.createElement('button')
        btn3.innerText='❌'
        btn3.classList.add('delete')

        let btn4 = document.createElement('button')
        btn4.innerText='📝'
        btn4.classList.add('update')
        //4. Append all button as children of Li
        li.appendChild(btn1)
        li.appendChild(btn2)
        li.appendChild(btn3)
        li.appendChild(btn4)
        //5. Append this to taskList
        taskList.appendChild(li)
    
}

let todo =[{name: 'Cricket', id:1},
    {name: 'hockey', id:2}
]; //To store all the todos of user

let current=todo.length+1
class Todo{
    static addTask(name, initialLoading){
    // 1. Create Li element
    let li = document.createElement('li')
    li.setAttribute("data-name", name)   // ✅ set clean attribute
    
    // 2. Create span for task text
    let span = document.createElement('span')
    span.innerText = name
    li.appendChild(span)

    // 3. Create buttons
    let btn1 = document.createElement('button')
    btn1.innerText='⬇️'
    btn1.classList.add('decrease-priority')

    let btn2 = document.createElement('button')
    btn2.innerText='⬆️'
    btn2.classList.add('increase-priority')

    let btn3 = document.createElement('button')
    btn3.innerText='❌'
    btn3.classList.add('delete')

    let btn4 = document.createElement('button')
    btn4.innerText='📝'
    btn4.classList.add('update')

    // 4. Append buttons to li
    li.appendChild(btn1)
    li.appendChild(btn2)
    li.appendChild(btn3)
    li.appendChild(btn4)

    // 5. Add li to taskList
    taskList.appendChild(li)

    // 6. Add to todo array only if not initial loading
    if(initialLoading === false){
        todo.push({ name: name, id: current++ })
    }
}


    static refreshTodo(){
        taskList.innerHTML=""
        for(let i=0; i<todo.length; i++){
            console.log(todo[i])
            this.addTask(todo[i].name, true)
        }
    }

    static deleteTask(name){
        let indx=-1;
        for(let i=0; i<todo.length; i++){
            if(todo[i].name==name){
                indx=i;
                break;
            }
        }
        console.log(indx)
        //To split array
        if(indx!==-1){
            todo.splice(indx, 1)
            console.log('New ToDos: ', todo)
        }
        
        this.refreshTodo();
    }
    static increasePriority(name){
        let indx=-1;
        for(let i=0; i<todo.length; i++){
            if(todo[i].name==name){
                indx=i;
                break;
            }
        }
        if(indx>0){
            let temp=todo[indx-1]
            todo[indx-1]=todo[indx]
            todo[indx]=temp
            this.refreshTodo()
        }
    }
    static decreasePriority(name){
        let indx=-1;
        for(let i=0; i<todo.length; i++){
            if(todo[i].name==name){
                indx=i;
                break;
            }
        }
        if(indx!==-1 && indx < todo.length - 1){   // ✅ fix boundary
            let temp=todo[indx+1]
            todo[indx+1]=todo[indx]
            todo[indx]=temp
            this.refreshTodo()
        }
    }

}


//Call the function to ensure that todos array elements gets loaded on the page when refreshed
Todo.refreshTodo()

button.addEventListener('click',()=>{
    let inputData = input.value.trim() //Removes spaces from start and end
    if(inputData){ 
        // addTaskToTaskList(inputData)
        Todo.addTask(inputData, false)
    }
    input.value = "" //Sets the input field to empty again
})

taskList.addEventListener('click', (ev)=>{
    let target = ev.target
    let task = target.parentElement.getAttribute('data-name')  // ✅ safe way
    
    if(target.classList.contains('delete')){
        Todo.deleteTask(task)
    } else if(target.classList.contains('increase-priority')){
        Todo.increasePriority(task)
    } else if(target.classList.contains('decrease-priority')){
        Todo.decreasePriority(task)
    }
})

