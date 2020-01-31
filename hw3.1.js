let arr = [1,2,9,4,5,6,7,8];

function maxArrayElement (arr){
    let maxElement = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(maxElement < arr[i]){
            maxElement = arr[i]
        }
    }
    return maxElement;
}
let max = maxArrayElement(arr);
console.log(max);
