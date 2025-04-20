let arr = [1, 1, 1, 0, 0, 0, 1, 0, 0, 1];
let i = 0;
let j = 0;
while (j < arr.length) {
    if (arr[j] === 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
    }
    j++;
}
console.log(arr); // Output: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1]