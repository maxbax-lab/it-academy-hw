class HashStorage {
    constructor(){
        this.cocktail = {}; 
    }
    addValue(key,value){
        this.cocktail[key] = value;
    }
    getValue(key){
        return this.cocktail[key];
    }
    deleteValue(key){
        if(!(key in this.cocktail)){
            return false
        }
        return delete this.cocktail[key];
    }
    getKeys(){
        return Object.keys(this.cocktail);
    }
}

class HashStorageMixer extends HashStorage {
    mixing() {
        setTimeout(onReady, 1000);
        return "замешиваем...";
    }
    getValue(key) {
        super.getValue(key);
        return  (`ингредиент: ${this.cocktail[key]}`);
    }
}
function onReady() {
    console.log( 'Коктейл готов!' );
}

let newCocktail2= new HashStorageMixer();

class HashStorageBarTender extends HashStorage {

    question() {
        return "какой вы бы хотели заказать коктейл?"
    }
    phrase() {
        return "если не знаете какой коктейл выбрать, то попробуйте наш фирменный"
    }
    mixing() {
        setTimeout(onReady, 1000);
        return "замешиваем...";
     }
    getValue(key) {
        super.getValue(key);
        return  (`принимаем заказ: ${this.cocktail[key]}`);
    }
}

let newCocktail3 = new HashStorageBarTender();

console.log(newCocktail3.question());
newCocktail3.addValue("заказ1", "'просто виски с яблочным соком и льдом'");
console.log(newCocktail3.getValue("заказ1"));
console.log(newCocktail3.mixing());