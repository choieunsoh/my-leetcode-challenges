// function to check if a number is prime
function isPrime(num) {
  // 1 is not prime
  if (num === 1) {
    return false;
  }
  // 2 is prime
  if (num === 2) {
    return true;
  }
  // check if num is divisible by any number from 2 to sqrt(num)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  // if num is not divisible by any number from 2 to sqrt(num), it is prime
  return true;
}

function primes(count) {
  const primes = [];

  // start with 2, the first prime number
  let num = 2;

  // keep adding prime numbers to the array until there are 26
  while (primes.length < count) {
    if (isPrime(num)) {
      primes.push(num);
    }
    // increment the number to check for the next prime
    num++;
  }

  return primes;
}

console.log(primes(10));
console.log(primes(26));
console.log(primes(52));
