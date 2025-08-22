// Create a new Promise object
let p = new Promise((res, rej)=>{
    res();   // Immediately resolving the promise
    // rej(); // (If this were called, it would go to catch block)
})

// Promise always returns a promise, so we can chain .then() easily
p.then(()=>{
    console.log('Promise Poora Hua')  // ✅ First then runs
    return 2;  // Returning a value makes it available to the next .then()
})
.then((data)=>{
    console.log(data)  // ✅ Prints: 2
    return data*2;     // Pass new value to next .then()
})
.then((data)=>{
    console.log(data)  // ✅ Prints: 4
})
.catch(()=>{
    console.log('Promise Toot Gaya')  // ❌ Runs only if rejected
})
