function waitAsec(){
    let t1= new Date().getTime(); //This gives time in milliseconds from 1st jan 1970 
    while(new Date().getTime() < t1+1000){} //This checks if the time is increaed by 1000, i.e. 1second
}

function waitNSec(n){
    for (let i =0; i<n; i++){
        console.log('waiting...')
        waitAsec();
    }
}
console.log('hello')
waitNSec(5);
console.log('hello again')