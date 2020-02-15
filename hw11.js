let arr =[1,2,3,4,6,22,1,33,55];

function inRange (min,max) {
    return item => (item >= min && item <= max);
}

console.log(arr.filter(inRange(2,10)));
