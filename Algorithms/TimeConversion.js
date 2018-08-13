function timeConversion(s) {
  const t = s.split(':');
  const tFormat = t[2].substr(2, 2);
  t[2] = t[2].slice(0, 2);
  const newT = [...t, tFormat];

  if (newT[3] === 'AM') {
    if (newT[0] === '12') {
      newT[0] = '00';
    }
  }

  if (newT[3] === 'PM') {
    newT[0] = parseInt(newT[0], 10) + 12;
    if (newT[0] === 24) {
      newT[0] = '12';
    }
  }
  newT.pop();

  return newT.join(':');
}
