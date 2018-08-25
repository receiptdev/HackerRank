function pangrams(input) {
    var hash = {};
    input = input.toLowerCase().replace(/\s+/g, '');
    for(var i = 0; i < input.length; i++) {
        hash[input[i]] = true;
    }

    if(isPangram(hash)) {
        console.log("pangram");
    } else {
        console.log("not pangram");
    }
}