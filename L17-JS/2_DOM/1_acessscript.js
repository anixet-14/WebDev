let h = document.getElementById('heading') //Returns single element on browser console
console.log(h)
let movies = document.getElementsByClassName('movie'); //Returns collection
console.log(movies)

let h1 = document.querySelector('#heading') //Returns one element
console.log(h1)

h1 = document.querySelector('.movie') //Returns the first element of class movie
console.log(h1)

h1 = document.querySelectorAll('.movie') //This returns all elements with same class or id, returns Nodelist
console.log(h1)