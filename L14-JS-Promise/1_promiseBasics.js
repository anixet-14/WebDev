function fulFillHandler(){
    console.log('Promise Poora Ho Gaya')
}
function rejectHandler(){
    console.log('Promise Tut Gaya')
}
let p = new Promise((res, rej)=>{
    let flag = false;
    if (flag) res();
    else rej();
})

///Method to map res and rej to fullfilhandler and rejectHandler
/* Way-1:
    p.then(pooraHonePeJoChalega, tootnePeJoChalega)
   Way-2:
    p
        .then(pooreHonePeJoChalega)
        .catch(tootnePeJoChalega)
*/

p.then(fulFillHandler).catch(rejectHandler)