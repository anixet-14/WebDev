let input = document.querySelector('input')
let button = document.querySelector('button')

//Select the task list
let taskList = document.querySelector('ul')


button.addEventListener('click',()=>{
    let inputData = input.value.trim() //Removes spaces from start and end
    if(inputData){ 
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
    input.value = "" //Sets the input field to empty again
})