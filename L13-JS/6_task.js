//Add asynchronous delay to make it go sequentially also
function download(url, cb){
    let profileImg = url.split('/').pop(); //This will split the url with slash and return array of it, and pop will be used to return the last element in that array
    setTimeout(()=>{
        console.log(profileImg)
        cb(profileImg, upload);
    }, 2000)
}

function compress(profileImg, cb){
    compressedImg = profileImg.split('.')[0]+'.webp';

    setTimeout(()=>{
        console.log(compressedImg)
        cb(compressedImg)
    }, 4000)
}

function upload(cmpImg){
    let newUrl = 'http://nayiwebsite.com/'+cmpImg
    console.log('Profile Picture uploaded to ',newUrl)
    console.log('Task finished')
}

download('https://www.google.com/xhsgh/aniket.jpg', compress)