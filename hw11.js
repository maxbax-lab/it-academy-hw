let arr = [1,2,3,33,15,10,56]

console.log (arr.filter (item => (1 <= item && item <= 16)))

console.log (arr.filter (function(item) {
    if(1 <= item && item <= 16){
        return arr;
    }
}))
