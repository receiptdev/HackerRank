const insertionSort1 = (n, arr) => {
    let num = arr[arr.length - 1];
    let placed = false;
    for(let j = arr.length - 2; j >= 0; j--) {
        if(arr[j] > num) {
            arr[j + 1] = arr[j];
            printArray(arr);
        } else {
            arr[j + 1] = num;
            printArray(arr);
            placed = true;
            break;
        }
    }
    if(!placed) {
        arr[0] = num;
        printArray(arr);
    }
}

let printArray = arr => console.log(arr.join(" "));

insertionSort1(5, [2, 4, 6, 8, 3])
insertionSort1(14, [1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23])