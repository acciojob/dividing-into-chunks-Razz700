const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let x=[[],[],[]];
let j=0,i=0;
while(j<arr.length){
    let sum=arr[0];
    while(sum<=n && j<arr.length){
        sum=sum+arr[j];
         x[i].push(arr[j]);
        j++;
    }
    i++;
}
return x;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
