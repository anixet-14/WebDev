let googleForm = document.querySelector('#googleForm')

googleForm.addEventListener('submit', (ev)=>{
    ev.preventDefault(); //Stops form from submitting default if it is defined inside html
    console.log("form submitted")
    console.log(ev.target.children[0].value)
    window.location=`https://www.google.com/search?q=${ev.target.children[0].value}`
})