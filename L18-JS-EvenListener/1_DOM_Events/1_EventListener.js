let h1 = document.querySelector('h1')

// //Method-1
h1.onclick=()=>{
    console.log('Mere Ko Kyu Dabaya?')
    alert('Chala Ja Bsdk')
}
//Method-2
h1.addEventListener('click', ()=>{
    alert("Why Pressing Me")
})

//To change theme on clicking a button
let btn = document.querySelector('#btn')
btn.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('theme')
})