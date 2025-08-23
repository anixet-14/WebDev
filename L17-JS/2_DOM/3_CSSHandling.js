//Changing CSS of html using JS

// //For single element
// let movie = document.querySelector('.movie')
// movie.style.color ='orange'

// //For list of elements
// let movies = document.querySelectorAll('.movie')
// for(let i=0; i<movies.length; i++){
//     let movie = movies[i]
//     movie.style.color = 'orange'
//     movie.style.backgroundColor = 'black'
// }


// document.querySelector('body').style.backgroundColor='black'
// document.querySelector('body').style.color='white'

// //To add a class
// let movie = document.querySelector('.movie')
// movie.classList.add('myMovie')

// To remove class
setTimeout(()=>{
    movie.classList.remove('myMovie')
}, 4000) //Removes class after 4second


//To add/remove class in a time interval
setInterval(()=>{
    movie.classList.toggle('myMovie')
}, 2000)