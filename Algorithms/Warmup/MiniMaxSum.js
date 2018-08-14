function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = arr.reduce(reducer);
  let min = sum - arr.pop();
  let max = sum - arr.shift();

  console.log(min, max);
}
