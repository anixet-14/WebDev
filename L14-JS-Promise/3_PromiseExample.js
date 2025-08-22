function downloadMovie(url){
    return new Promise((res, rej)=>{
        if(!url) rej("URL NOT PROVIDED")
        else{
            console.log("Download Started")
            setTimeout(()=>{
                console.log("Download Completed")
                let movieName = url.split('/').pop()
                res(movieName)
            }, 5000)
        }
    })
}

function compress(movieName){
    return new Promise((res, rej)=>{
        if(!movieName) rej('Cannot Compress')
        else{
            console.log("Compression Started")
            setTimeout(()=>{
                let compressedMovie = movieName.split('.')[0]+'.zip'
                res(compressedMovie)
            }, 2000)
        }
    })
}

function upload(compressedMovie){
    return new Promise((res, rej)=>{
        if(!compressedMovie) rej('Cannot Upload')
        else{
            console.log("Uploading Started")
            setTimeout(()=>{
                let newUrl = 'http://nayimovie.com/'+compressedMovie
                res(newUrl)
            }, 2000)
        }
    })
}


let p = downloadMovie('https://filmy.org/KalaPathar.mp4')

/*Nested Way
p
.then(function(movieName){
    console.log("Downloaded", movieName)
    compress(movieName)
    .then((compressedMovie)=>{
        console.log("Compression Completed", compressedMovie)
        upload(compressedMovie)
        .then((newUrl)=>{
            console.log('Movie Uploaded at', newUrl)
        })
        .catch(msg=>{
            console.log(msg)
        })
    })
    .catch(msg=>{
        console.log(msg)
    })
}).catch(msg=>{
    console.log(msg)
})
*/
//Better Method
downloadMovie('https://filmy.org/KalaPathar.mp4')
.then(compress)
.then(upload)
.then(newUrl=>{
    console.log("Video Uploaded at", newUrl)
    return "All Done"
})
.then(msg=>{
    console.log(msg)
})
.catch(msg=>{
    console.log(msg)
})