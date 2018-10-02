
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

function cumulativeSum(nums) {
  const sums = [];
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    sums.push(curr + nums[i]);
    curr += nums[i];
  }
  return sums;
}

console.log(primeGen(10));
console.log(cumulativeSum([1, 2, 3, 4]));
