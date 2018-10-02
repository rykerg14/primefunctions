
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeGen(threshold) {
  const primes = [];
  for (let i = 0; i < threshold; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(primeGen(10));
