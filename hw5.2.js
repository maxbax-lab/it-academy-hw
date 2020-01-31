const objOne = {
    name: "Andrew",
    age: 20,
    car: "Audi",
};
const objTwo = {
    name: "Kate",
    car: "BMW",
    age: 20,

};
const objOneKeyArr = (Object.keys(objOne));

function deepEqual(objOne, objTwo){
    const objOneKeysLength = (Object.keys(objOne)).length;
    const objTwoKeysLength = (Object.keys(objTwo)).length;
    const objOneKeyArr = Object.keys(objOne);
    const objTwoKeyArr = Object.keys(objTwo);
    const objOneValueArr = Object.values(objOne);
    const objTwoValueArr = Object.values(objTwo);
    if (objOneKeysLength != objTwoKeysLength){
        return "false";
    } else if (objOneKeysLength === objTwoKeysLength) {
        for (let i = 0; i < objOneKeyArr.length; i++){          
            for (let j = 0; j < objTwoKeyArr.length; j++){               
                if (objOneKeyArr[i] === objTwoKeyArr[j] && objOneValueArr[i] === objTwoValueArr[j]){
                   return "true";
                } else {
                    return "false";
                }              
            }
        }
    }
}
console.log (deepEqual(objOne, objTwo));
