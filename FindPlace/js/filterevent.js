let elBars = document.getElementsByClassName("bar");
let btnBar = document.getElementById("bars");
function switchToBarPage(){
    [...elBars].forEach(element => {
        element.classList.toggle("hide");
    });
    btnBar.classList.toggle("disabled");
};    

let elRestaurants = document.getElementsByClassName("restaurant");
let btnRestaurants = document.getElementById("restaurants");
function switchToRestaurantsPage(){
    [...elRestaurants].forEach(element => {
        element.classList.toggle("hide");
    });
    btnRestaurants.classList.toggle("disabled");
};

let elCoffeepoints = document.getElementsByClassName("coffeepoint");
let btnCoffeepoints = document.getElementById("coffeepoints");
function switchToCoffeepointsPage(){
    [...elCoffeepoints].forEach(element => {
        element.classList.toggle("hide");
    });
    btnCoffeepoints.classList.toggle("disabled");
}; 

let elEntertainments = document.getElementsByClassName("entertainment");
let btnEntertainments = document.getElementById("entertainments");
function switchToEntertainmentsPage(){
    [...elEntertainments].forEach(element => {
        element.classList.toggle("hide");
    });
    btnEntertainments.classList.toggle("disabled");
};   