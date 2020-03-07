const arr = [1,2,1,2,5,3,4,4,4,5,5];

function unique (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) === i){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(unique (arr));

