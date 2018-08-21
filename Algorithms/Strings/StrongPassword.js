function minimumNumber(n, password) {
    const specialChar = "!@#$%^&*()-+";
    const passwordFields = password.split("");
    let flag = {
        number: false,
        lowerCase: true,
        upperCase: false,
        special: false
    };
    let { number, lowerCase, upperCase, special } = flag;
    let enhanced = 0;

    console.log(number, lowerCase, upperCase, special);

    passwordFields.map(passwordField => {
        if (passwordField >= "0" && passwordField <= "9") {
            number = true;
        }
        if (passwordField >= "a" && passwordField <= "z") {
            lowerCase = true;
        }
        if (passwordField >= "A" && passwordField <= "Z") {
            upperCase = true;
        }
        if (specialChar.indexOf(passwordField) >= 0) {
            special = true;
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

    console.log("enhanced", enhanced);

    return enhanced;
}
