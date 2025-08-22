//We use callback functions to make the async program to run in sequence
function maggieLaana(cb){
    console.log("Maggie lene gaye")
    setTimeout(()=>{
        console.log('Maggie aa gayi')
        cb(maggieKhana) //Callback function use to make it synchronous
    }, 3000) //cb-> maggieBanana function ko call krega
}

function maggieBanana(cb){
    console.log('Maggie banana chaalu')
    setTimeout(()=>{
        console.log('Maggie ban gayi')
        cb() //cb->maggie khana function ko call krega
    }, 3000)
}

function maggieKhana(){
    console.log('Maggie khana chaalu')
    setTimeout(()=>{
        console.log('Maggie khtm')
    }, 3000)
}
maggieLaana(maggieBanana)

