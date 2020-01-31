const arr = [1,2,3,[4,5]];

function arrSum (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ){
        if(Array.isArray(arr[i])){
            sum += arrSum(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(arrSum(arr));
