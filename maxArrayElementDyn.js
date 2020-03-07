function maxArrayElement (...arr){
    let maxElement = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(maxElement < arr[i]){
            maxElement = arr[i];
        }
    }
    return maxElement;
}
let max = maxArrayElement(1,2,3,56,6,9,8);
console.log(max);
