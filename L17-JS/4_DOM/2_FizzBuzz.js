// Write a program that prints numbers from 1 to N (say 1 to 100), but:
//     For numbers divisible by 3, print "Fizz" instead of the number.
//     For numbers divisible by 5, print "Buzz" instead of the number.
//     For numbers divisible by both 3 and 5, print "FizzBuzz".


for(let i=1; i<=30; i++){
    let str=''
    if(i%3==0) str+='Fizz'
    if(i%5==0) str+='Buzz'
    console.log(str==''?i:str)
    //No need to check condition with 15, if 3 and 5 divides, then 15 condition satisfies already
}