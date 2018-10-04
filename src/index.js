function calcPrime(num) {
  let prime = null;
  let pow = 0;
  let primesNum = [];
  let cn = 2;
  do {
    if (num % cn === 0) {
      primesNum.push(cn);
      num = num / cn;
    } else {
      cn++;
    };
  }
  while (cn <= num);
  prime = Math.max(...primesNum);
  pow = primesNum.filter(function(el) {return el === prime}).length;
  return [prime, pow];
}

module.exports = function getZerosCount(number, base) {
  const [prime, pow] = calcPrime(base);
  let s = 1;
  let count = Math.pow(prime, s);
  let zeroes = 0;
  for (; number >= count; count = Math.pow(prime, ++s)) {
    zeroes = zeroes + Math.trunc(number / count);
  }
  return Math.floor(zeroes / pow);
}
