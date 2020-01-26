let Arr = [1,2,9,4,5,6,7,8];

function maxArrayElement (Arr){
    let maxElement = Arr[0];
    for (let i = 0; i < Arr.length; i++){
        if(maxElement < Arr[i]){
            maxElement = Arr[i]
        }
    }
    return maxElement;
}
let max = maxArrayElement(Arr);
console.log(max);
