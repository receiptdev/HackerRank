const isAlternating = s => {
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) === s.charAt(i + 1)) {
            return false;
        }
    }
    return true;
};

function solve(s) {
    // input string to array and duplicate filter
    let distinct = s.split("");
    distinct = distinct.filter(
        (value, index, array) => array.indexOf(value) === index
    );

    let max = 0;
    for (let i = 0; i < distinct.length - 1; i++) {
        for (let j = i + 1; j < distinct.length; j++) {
            let c1 = distinct[i];
            let c2 = distinct[j];
            let subset = s.replace(
                new RegExp("[^" + c1 + "" + c2 + "]", "gi"),
                ""
            );

            if (isAlternating(subset)) {
                let l = subset.length;
                console.log(subset, l, max);
                max = l > max ? l : max;
            }
        }
    }

    console.log(max);

    return max;
}
