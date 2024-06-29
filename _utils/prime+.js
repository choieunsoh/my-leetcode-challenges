function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime numbers
  if (n <= 3) return true; // 2 and 3 are prime numbers

  // This is checked so that we can skip middle five numbers in below loop
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// Test the function with 1000000007
console.log(isPrime(2)); // Output: true
console.log(isPrime(3)); // Output: true
console.log(isPrime(4)); // Output: false
console.log(isPrime(5)); // Output: true
console.log(isPrime(1000000007)); // Output: true
console.log(isPrime(1000000009)); // Output: true (another large prime number)
console.log(isPrime(1000000010)); // Output: false (not a prime number)
console.log(isPrime(100000003)); // Output: false
console.log(isPrime(1000003)); // Output: true
