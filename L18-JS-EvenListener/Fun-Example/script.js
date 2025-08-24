let movie = document.querySelector('.shareer')
let classes = ["myMovie", "myMovie1", "myMovie2", "myMovie3", "myMovie4", "myMovie5", "myMovie6"]
let i = 0

setInterval(() => {
    // remove all classes first
    movie.classList.remove(...classes)

    // add the current class
    movie.classList.add(classes[i])

    // move to the next class in pattern
    i = (i + 1) % classes.length
}, 1000) // change every 500ms
