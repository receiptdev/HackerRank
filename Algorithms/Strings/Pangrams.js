const pangrams = input => {
    const hash = {};
    input = input.toLowerCase().replace(/\s+/g,'');
  
    for (const value of input) {
        hash[value] = true;
    }
  
    return (Object.keys(hash).length === 26) ? 'pangram' : 'not pangram';
}

pangrams('We promptly judged antique ivory buckles for the next prize');
pangrams('We promptly judged antique ivory buckles for the prize');