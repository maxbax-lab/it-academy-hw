function HashStorageFunc(){

    this.cocktail = {};
   
    this.addValue = function(key,value){
         this.cocktail[key] = value;
    }
    this.getValue = function(key){
        return this.cocktail[key];
    }
    this.deleteValue = function(key){
        if(!(key in this.cocktail)){
            return false
        }
        return delete this.cocktail[key];
    }
    this.getKeys = function(){
        return Object.keys(this.cocktail);
    }
}

//let newCocktail = new HashStorageFunc();

// newCocktail.addValue("название", 'Куба Либре');
// console.log(newCocktail.getValue("название"));

// newCocktail.addValue("рецепт", ["ром - 50г","кола - 100г"]);
// console.log(newCocktail.getValue("рецепт"));

// console.log(newCocktail.getKeys());
// console.log(newCocktail.deleteValue("состав"))

function HashStorageMixer() {
    HashStorageFunc.apply(this, arguments);

    let parentgetValue = this.getValue;
    this.getValue = function(key) {
        parentgetValue.call(this);
        return  (`ингредиент: ${this.cocktail[key]}`);
    }

     this.mixing = function() {
        setTimeout(onReady, 1000);
        return "замешиваем...";
     }
     function onReady() {
        console.log( 'Коктейл готов!' );
      }

}

let newCocktail2 = new HashStorageMixer();

// newCocktail2.addValue("ингредиент-1", "виски - 100г");
// console.log(newCocktail2.getValue("ингредиент-1"));
// newCocktail2.addValue("ингредиент-2", "сок - 250г");
// console.log(newCocktail2.getValue("ингредиент-2"));
// newCocktail2.addValue("ингредиент-3", "лёд");
// console.log(newCocktail2.getValue("ингредиент-3"));
// console.log(newCocktail2.mixing());

function HashStorageBarTender() {
    HashStorageFunc.apply(this, arguments);

    let parentgetValue = this.getValue;
    this.getValue = function(key) {
        parentgetValue.call(this);
        return  (`принимаем заказ: ${this.cocktail[key]}`);
    }

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

let newCocktail3 = new HashStorageBarTender();



console.log(newCocktail3.question());
newCocktail3.addValue("заказ1", "'просто виски с яблочным соком и льдом'");
console.log(newCocktail3.getValue("заказ1"));
console.log(newCocktail3.mixing());