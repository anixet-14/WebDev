//create the element to be added
let li = document.createElement('li')
li.innerText='Avatar' //Add text to the li tag
li.classList.add('movie')  //Adds class to the li tag
console.log(li)

//Select the tag's class under which it has to be added
let movieList = document.querySelector('.movieList')

// //Add to the HTML page's element
// movieList.appendChild(li)


//To add entire movie list
let arr= ['Avatar', 'Mr Bean', 'Temple Run']
for( let e of arr){
    let listele = document.createElement('li')
    listele.innerText=e
    listele.classList.add('movie')
    movieList.appendChild(listele)
}

// //Method - 2 of adding entire list
// movieList.innerHTML = movieList.innerHTML+`<li class="movie">Coding</li>`

// //Time complexity of Method-1 is O(1) because it simply appends element to the current list
// //Time complexity of Method-2 is O(N) because it adds the element then reprint all the elements again on screen. You can check in elements section in developer options in browser, all the Li's blinks, means all get reprinted on screen