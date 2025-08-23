//Accessing inner content:
//      1. innerText
//      2. innerHTML

h = document.querySelector('.movieList')
console.log(h.innerText) //Returns the text inside the class movieList
console.log(h.innerHTML) //Returns inner HTML code 

//To make changes to html page;
h.innerHTML+='<li>Adhuri Daastan</li>'//This will create another bullet to the page
h.innerText+='<li>Hello Doston</li>' //This will be added as simple text