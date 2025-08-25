let input = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('click',()=>{
    let inputData = input.value.trim() //Removes spaces from start and end
    if(inputData){ //Only prints if the input is not empty
        console.log(input.value)
    }
    input.value = "" //Sets the input field to empty again
})