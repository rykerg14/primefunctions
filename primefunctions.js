
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


function maxPrimeSum(threshold) {
  const primes = primeGen(threshold);
  let finalSum = -1;
  let finalCount = -1;
  for (let i = 0; i < primes.length; i++) {
    let sum = 0;
    let count = 0;
    let j = i;
    while (sum + primes[j] < threshold) {
      sum += primes[j];
      count++;
      j++;
    }
    if (isPrime(sum) && sum > finalSum && count > finalCount) {
      finalSum = sum;
      finalCount = count;
    }
  }
  const result = [finalSum, finalCount];
  return result;
}


console.log(primeGen(10));
console.log(cumulativeSum([1, 2, 3, 4]));
console.log(maxPrimeSum(1000));
