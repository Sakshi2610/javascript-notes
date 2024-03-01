function findSubArray(arr, n, sum) {
    let currSum = arr[0];
    let start = 0;

    
    for (let i = 1; i <= n; i++) {
        while (currSum > sum && start < i - 1) {
            currSum = currSum - arr[start];
            start++;
        }
        if (currSum === sum) {
            return [start + 1, i];
        }

        if (i < n) {
            currSum = currSum + arr[i];
        }
    }
    return [-1, -1]; 
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length;
let sum = 15;
console.log(findSubArray(arr, n, sum)); 