let arr = [4, 9, 7, 5, 8, 9, 3];
let swap = 0;
for (let i = arr.length; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) {
      tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
      swap++;
      console.log(`${swap}. [${arr[j]}, ${arr[j + 1]}] -> ${arr}`);
    }
  }
}
console.log(`swap : ${swap}`);
