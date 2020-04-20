function HashStorage(){
    this.cocktail = {}; 
}

HashStorage.prototype.addValue = function(key,value){
        this.cocktail[key] = value;
    }
HashStorage.prototype.getValue = function(key){
        return this.cocktail[key];
    }
HashStorage.prototype.deleteValue = function(key){
        if(!(key in this.cocktail)){
            return false
        }
        return delete this.cocktail[key];
    }
HashStorage.prototype.getKeys = function(){
        return Object.keys(this.cocktail);
    }

function HashStorageMixer() {

    this.cocktail = {}; 

     this.mixing = function() {
        setTimeout(onReady, 1000);
        return "замешиваем...";
     }
     function onReady() {
        console.log( 'Коктейл готов!' );
      }
}

HashStorageMixer.prototype = Object.create(HashStorage.prototype);
HashStorageMixer.prototype.constructor = HashStorageMixer;
HashStorageMixer.prototype.getValue = function(key) {
    HashStorage.prototype.getValue.call(this,key);
    return  (`ингредиент: ${this.cocktail[key]}`);
}

let newCocktail2= new HashStorageMixer();

function HashStorageBarTender() {

    this.cocktail = {}; 
   
    this.question = function() {
        return "какой вы бы хотели заказать коктейл?"
    }
    this.phrase = function() {
        return "если не знаете какой коктейл выбрать, то попробуйте наш фирменный"
    }
    this.mixing = function() {
        setTimeout(onReady, 1000);
        return "замешиваем...";
     }
     function onReady() {
        console.log( 'Коктейл готов! Приятного вечера!' );
      }
}

HashStorageBarTender.prototype = Object.create(HashStorage.prototype);
HashStorageBarTender.prototype.constructor = HashStorageBarTender;
HashStorageBarTender.prototype.getValue = function(key) {
    HashStorage.prototype.getValue.call(this,key);
    return  (`принимаем заказ: ${this.cocktail[key]}`);
}
let newCocktail3 = new HashStorageBarTender();

console.log(newCocktail3.question());
newCocktail3.addValue("заказ1", "'просто виски с яблочным соком и льдом'");
console.log(newCocktail3.getValue("заказ1"));
console.log(newCocktail3.mixing());
