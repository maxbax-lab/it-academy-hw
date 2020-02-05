const person = {
    firstName: "Вася",
    lastName: "Петров",
    age: 25
}

function print (userId, userLocation, userBrowser) {
    console.log(`имя: ${this.firstName}, фамилия: ${this.lastName}, возраст: ${this.age}, id: ${userId}, страна: ${userLocation}, браузер: ${userBrowser} `);
}

function myBind (func, context, ...args){
    return function(...rest){
        func.apply(context, args.concat(rest));
    }
}
myBind(print,person,333444, "USA")("safari")

