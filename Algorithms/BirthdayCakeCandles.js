function birthdayCakeCandles(ar) {
  let max = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i];
    }
  }
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === max) {
      count++;
    }
  }
  return count;
}
