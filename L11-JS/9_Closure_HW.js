function createCounter() {
    let count = 0;  // private variable, When we use a closure, the variable count is declared inside the outer function (createCounter()), so it’s not accessible from outside:

    return {
        increment: function() {
            count++;
            console.log("Count after increment:", count);
        },
        decrement: function() {
            count--;
            console.log("Count after decrement:", count);
        },
        //
        getCount: function() {
            return count;
        }
    };
}

// Usage
const counter = createCounter();

counter.increment(); // Count after increment: 1
counter.increment(); // Count after increment: 2
counter.decrement(); // Count after decrement: 1
console.log("Current Count:", counter.getCount()); // Current Count: 1


function memoizedFibonacci() {
    let cache = {};  // private cache (closure variable)

    function fib(n) {
        if (n in cache) {
            console.log("Fetching from cache:", n);
            return cache[n];   // return cached value
        }

        if (n <= 1) {
            cache[n] = n;  // base case
        } else {
            cache[n] = fib(n - 1) + fib(n - 2);  // recursive calculation
        }

        return cache[n];
    }

    return fib; // return the inner function
}

// Usage
const fibonacci = memoizedFibonacci();

console.log(fibonacci(6));  // 8 (calculated)
console.log(fibonacci(7));  // 13 (calculated partly from cache)
console.log(fibonacci(6));  // 8 (fetched directly from cache)
