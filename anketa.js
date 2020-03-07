/* входные данные */

let lastname;
do {
    lastname = prompt('Введите вашу фамилию');
} while (Boolean(lastname)!=true);

let firstname;
do {
    firstname = prompt('Введите ваше имя');
} while (Boolean(firstname)!=true);

let name;
do {
    name = prompt('Введите ваше отчество');
} while (Boolean(name)!=true);

let ageIn;
do {
    ageIn = prompt('Введите ваш год рождения');
} while (!Number(ageIn));
    

let monthIn;
do {
    monthIn = prompt('Введите ваш месяц рождения');
} while (Boolean(monthIn)!=true);

let sex;
do {
    sex = prompt('Введите ваш пол');
} while (Boolean(sex)!=true);

let children;
do {
    children = prompt('Количество детей:', 'нет/1/2/3...');
} while (Boolean(children)!=true);

/* дополнительный подсчет данных */

let ageOut;
let monthOut;
let adult;
let currentmonth = 1;
if (monthIn === 1){
    ageOut = 2020 - ageIn; 
    monthOut = 0;
} else if( 1 < monthIn && monthIn <= 12){
    ageOut = 2020 - ageIn - currentmonth;
    monthOut = 13 - monthIn;
};
 if (ageIn >=18){
     adult = 'совершеннолетний'
 } else {
     adult = 'несовершеннолетний'
 }

let result = `${lastname} ${firstname} ${name} Вам ${ageOut} лет и ${monthOut} месяцев Вы ${sex} Вы ${adult} У Вас ${children} детей`;
alert(result);

