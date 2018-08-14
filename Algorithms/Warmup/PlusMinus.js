function plusMinus(arr) {
  const denominator = arr.length;
  const positives = arr.filter(element => element > 0);
  const negatives = arr.filter(element => element < 0);
  const zero = arr.filter(element => element == 0);

  const fractionPositive = (positives.length / denominator).toPrecision(6);
  const fractionNegative = (negatives.length / denominator).toPrecision(6);
  const fractionZero = (zero.length / denominator).toPrecision(6);

  console.log(fractionPositive);
  console.log(fractionNegative);
  console.log(fractionZero);
}
