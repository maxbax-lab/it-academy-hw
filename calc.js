let calc = (function calculation(){
    
    let result = 0;

    return {
        add: function (a){
            result += a;
        },
        substract: function (a){
            result -= a;
        },
        multiply: function (a){
            result *= a;
        },
        divide: function (a){
            result /= a;
        },
        module: function (a){
            result %= a;
        },
        sqrt: function (a){
            result = Math.sqrt(a);
        },
        pow2: function (a){
            result = Math.pow(a,2);
        },
        pow3: function (a){
            result = Math.pow(a,3);
        },
        sin: function (a){
            result = Math.sin(a);
        },
        cos: function (a){
            result = Math.cos(a);
        },
        log: function (a){
            result = Math.log(a);
        },
        exp: function (a){
            result = Math.exp(a);
        },
        clear: function (){
            result = 0;
        },
        total: function (){
            return result;
        }
    };
}());

calc.sqrt(2);
calc.log(2);

console.log(calc.total());
