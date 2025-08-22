function memoizedFactorial() {
    let cache = {};  // private cache (closure variable)

    function factorial(n) {
        if (n in cache) {
            console.log("Fetching from cache:", n);
            return cache[n];
        }
        console.log("Calculating:", n);

        if (n === 0 || n === 1) {
            cache[n] = 1;
        } else {
            cache[n] = n * factorial(n - 1); // recursion + memoization
        }

        return cache[n];
    }

    return factorial; // expose only factorial function
}

const fact = memoizedFactorial();

console.log(fact(5)); // Calculates fully
console.log(fact(6)); // Uses result of fact(5) from cache
console.log(fact(5)); // Directly fetched from cache
