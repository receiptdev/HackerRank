function minimumNumber(n, password) {
  const specialChar = '!@#$%^&*()-+';
  const passwordFields = password.split('');
  const flag = {
    number: false,
    lowerCase: false,
    upperCase: false,
    specialChar: false,
  };
  let enhanced = 0;

  passwordFields.map(passwordField => {
    if (passwordField >= '0' && passwordField <= '9') {
      flag.number = true;
    }
    if (passwordField >= 'a' && passwordField <= 'z') {
      flag.lowerCase = true;
    }
    if (passwordField >= 'A' && passwordField <= 'Z') {
      flag.upperCase = true;
    }
    if (specialChar.indexOf(passwordField) >= 0) {
      flag.specialChar = true;
    }
  });

  for (const key of Object.keys(flag)) {
    if (!flag[key]) {
      enhanced++;
    }
  }

  if (n + enhanced < 6) {
    enhanced += 6 - (n + enhanced);
  }

  return enhanced;
}
