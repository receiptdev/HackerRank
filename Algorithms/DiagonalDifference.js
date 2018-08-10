function diagonalDifference(arr) {
    let ltrDiagonal = 0;
    let rtlDiagonal = 0;
    
    for(var i = 0; i < arr.length; i++) {  
        ltrDiagonal += arr[i][i];
        rtlDiagonal += arr[arr.length -1 - i][i]
    };
    
    return Math.abs(ltrDiagonal - rtlDiagonal);
}