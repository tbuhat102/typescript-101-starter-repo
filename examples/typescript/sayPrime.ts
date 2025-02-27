function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= 50; i++) {
  console.log(`${i} is ${isPrime(i) ? "prime" : "not prime"}`);
}

console.log(isPrime(50));
