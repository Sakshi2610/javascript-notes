function findTriplets(arr, n, sum){
    arr.sort((a,b) => a-b) //[1,3,4,5,7]
    let ans = 0

    for (let i=0; i<n-2; i++){  
        let j = i+1, k=n-1;
        while(j<k){
            if(arr[i] + arr[j] + arr[k] < sum){
                ans += k-j;
                j++
            }else{
                k--;
            }
        }
    }
    return ans;
}

let arr = [5,1,3,4,7]
let n = arr.length //5
let sum = 12
console.log(findTriplets(arr, n, sum))