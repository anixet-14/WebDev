console.log('Namaste')

//Now, this wont make the next statements to wait for time
setTimeout(function(){
    console.log('Samay Samapti ki Ghosna')
}, 5000)

console.log('Duniya')

//This calls the function at intervals continuosly
let id = setInterval(() => {
    console.log('Bhuup')
}, 1000);
//set Interval provides id that we can use to stop it.
setInterval(()=>{
    clearInterval(id)
}, 2000)

//To give argument:
setInterval((name) => {
    console.log(name);
}, 1000, 'aniket');
