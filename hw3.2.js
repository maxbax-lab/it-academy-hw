function maxArrayElement (...Arr){
    let maxElement = Arr[0];
    for (let i = 0; i < Arr.length; i++){
        if(maxElement < Arr[i]){
            maxElement = Arr[i];
        }
    }
    return maxElement;
}
let max = maxArrayElement(1,2,3,56,6,9,8);
console.log(max);
