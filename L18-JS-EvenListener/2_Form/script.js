let Form = document.querySelector('#form')
let platform = document.querySelector('#platform')
let inp = document.querySelector('input')


Form.addEventListener('submit', (ev)=>{
    ev.preventDefault(); 
    if(platform.value=='Google'){
        window.location=`https://www.google.com/search?q=${inp.value}`
    }
    else{
        window.location=`https://search.yahoo.com/search?p=${inp.value}`
    }
    
})