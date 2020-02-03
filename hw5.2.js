const a = {
    name: 1,
    age: 2,
    car: ["a",["b","c"]],
};
const b = {
    name: 1,
    age: 2,
    car: ["a",["b","c"]],
};

function deepEqual(a, b){
    
    let aKey = Object.keys(a);
    let bKey = Object.keys(b);

    if(a === b){
        return true;

    }else if ((typeof a === "object" && a !== null) && (typeof b === "object" && b !== null)){
        if (aKey.length != bKey.length){
            return false;
        }
        for(var key in a){
            if (!deepEqual(a[key],b[key])){
                return false;
            }                     
        }
        return true;     
    }
    return false;
}


console.log (deepEqual(a, b));
