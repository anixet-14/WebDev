let input = document.querySelector('#input')
let showKeys = document.querySelector('.showKeys')

input.addEventListener('keypress', (k)=>{
    console.log('Key Pressed', k.key)
    showKeys.innerText+=k.key
    
})