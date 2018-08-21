function beautifulBinaryString(b) {
    let count = 0;

    for (let i = 0; i < b.length; i++) {
        if (b.indexOf("010") > -1) {
            b = b.substring(b.indexOf("010") + 3);
            console.log(b, b.indexOf("010"));
            count++;
        }
    }

    console.log(count);
}

//beautifulBinaryString('0101010'); // 2
beautifulBinaryString(
    "100110110011111101110100011011101000011010111001001011010010110010111011100000000100011111100101010"
); // 99
beautifulBinaryString(
    "0101000010011100111110011000001000100101100010000011010111111101110110001110111110110101001011"
); // 94
