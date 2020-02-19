let formDef1= [
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
      variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
      variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {label:'Опубликовать:',kind:'submit'},
];

let formDef2=[
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {label:'Зарегистрироваться:',kind:'submit'},
];

let form1 = document.forms.form1;
let form2 = document.forms.form2;

createForm(form1, formDef1);
createForm(form2, formDef2);

function createForm(form, array) {
    array.forEach(item => {

        let div = document.createElement('div');
        form.appendChild(div);

        let label = document.createElement('label');
        let labelText = document.createTextNode(item.label);
        label.appendChild(labelText);

        let input = document.createElement('input');
        input.type = item.kind;
        input.name = item.name;
        
        input.classList.add(`${item.name}`);

        if (item.kind === 'combo') {
            let select = document.createElement('select');
            select.name = item.name;

            item.variants.forEach(item => {
                let option = document.createElement('option');
                let optionText = document.createTextNode(item.text);
                option.value = item.value;
                select.appendChild(option).appendChild(optionText);
            });
        } else if (item.kind === 'radio') {
            
            div.appendChild(label);
            item.variants.forEach(value => {    
                input = document.createElement('input');
                input.type = item.kind;
                input.name = item.name;
                input.value = value.value;

                label = document.createElement('label');
                labelText = document.createTextNode(value.text);

                label.appendChild(input);
                label.appendChild(labelText);
                div.appendChild(label);
            });
        } else if (item.kind === 'memo') {
            let textarea = document.createElement('textarea');
            textarea.name = item.name;
        
            div.appendChild(label);
            div.appendChild(textarea);;
        } else if (item.kind === 'submit') {
            input.value = item.label;
            div.appendChild(input);
        } else {
            div.appendChild(label);
            div.appendChild(input);
        }   
    });
}
