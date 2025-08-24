let url='https://jsonplaceholder.typicode.com/todos'

let taskList = document.querySelector('#taskList')
//fetch is promise which promises to return data
fetch(url)
    .then(data=>{
        return data.json()
    }).then(data=>{
        for(let i=0; i<data.length; i++){
            const element = data[i]
            console.log(data[i].title)
            let li= document.createElement('li')
            li.innerText=element.title
            taskList.appendChild(li)
        }
        
    })
    .catch(err=>{
        console.log(err)
    })

