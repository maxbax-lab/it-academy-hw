let D;
let x1;
let x2;
function solveEq(a,b,c) {
    D=b**2-4*a*c;
    if(D>0 && a!=0){
        x1=((-b+Math.sqrt(D))/(2*a));
        x2=((-b-Math.sqrt(D))/(2*a));
        return [x1,x2];
    }else if (D===0){
        x1=((-b/(2*a)));
        x1=x2;
        return[x1];
    }else{
        return[]
    }
}
console.log(solveEq(0,1,1));

