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
        
         //1. Create Li element
        let li = document.createElement('li')
        //2. Add input data to li item
        li.innerText = name
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

        //6. Adding task to todo array with id
        if(initialLoading==false){ //Adds element to todo if it's not initially loaded.
            todo.push({
            task: name,
            id: current++
        })
        }
        // console.log(todo)
    }

    static refreshTodo(){
        for(let i=0; i<todo.length; i++){
            console.log(todo[i])
            this.addTask(todo[i].name, true)
        }
    }
}

//Call the function to ensure that todos array elements gets loaded on the page when refreshed
Todo.refreshTodo()


button.addEventListener('click',()=>{
    let inputData = input.value.trim() //Removes spaces from start and end
    if(inputData){ 
        // addTaskToTaskList(inputData)
        Todo.addTask(inputData)
    }
    input.value = "" //Sets the input field to empty again
})