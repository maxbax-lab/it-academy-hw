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
    const objOneKeyArr = Object.keys(objOne);
    const objTwoKeyArr = Object.keys(objTwo);
    const objOneValueArr = Object.values(objOne);
    const objTwoValueArr = Object.values(objTwo);
    if (objOneKeyArr.length != objTwoKeyArr.length){
        return "false";
    } else if (objOneKeyArr.length = objTwoKeyArr.length) {
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
