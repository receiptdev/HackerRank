function camelcase(s) {
  const pattern = /[^a-z]/g;
  let count = s.match(pattern);

  count === null ? (count = 1) : (count = count.length + 1);

  return count;
}
