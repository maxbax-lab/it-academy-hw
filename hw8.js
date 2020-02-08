function HashStorageFunc (){

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

let newCocktail = new HashStorageFunc();

newCocktail.addValue("название", 'Замес');
newCocktail.addValue("рецепт", ["виски - 50г","кола - 100г"]);


console.log(newCocktail.getValue("рецепт"));
console.log(newCocktail.getKeys());
console.log(newCocktail.deleteValue("состав"))
