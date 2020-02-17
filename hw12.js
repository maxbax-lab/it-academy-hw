let formDef1=[
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

createForm(formDef1);
createForm(formDef2);


function createForm(form) {
    var form1 = document.getElementById("form1");           
    var form2 = document.getElementById("form2"); 
    switch (form) {
    case formDef1:
        if(formDef1[0].label){
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let siteNameText = document.createTextNode("Название сайта: ");
            label.appendChild(siteNameText);
            let siteName = document.createElement("input");
            label.appendChild(siteName);
            siteName.setAttribute("type", "text");
            siteName.setAttribute("style","margin-left: 37px", "width: 300px");
            siteName.setAttribute("name","sitename"); 
        };
        if(formDef1[1].label){
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let urlText = document.createTextNode("URL сайта: ");
            label.appendChild(urlText);
            let url = document.createElement("input");
            label.appendChild(url);
            url.setAttribute("type", "text");
            url.setAttribute("style","margin-left: 68px", "width: 300px");
            url.setAttribute("name","url"); 
        };
        if(formDef1[2].label){
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let visitorsText = document.createTextNode("Посетителей в сутки: ");
            label.appendChild(visitorsText);
            let visitors = document.createElement("input");
            label.appendChild(visitors);
            visitors.setAttribute("type", "text");
            visitors.setAttribute("style","width: 145px");
            visitors.setAttribute("name","visitors"); 
        };
        if(formDef1[3].label){
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let emailText = document.createTextNode("email для связи: ");
            label.appendChild(emailText);
            let email = document.createElement("input");
            label.appendChild(email);
            email.setAttribute("type", "text");
            email.setAttribute("style","margin-left: 39px", "width: 300px");
            email.setAttribute("name","email"); 
        };
        if(formDef1[4].label1){
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let catalogText = document.createTextNode("Рубрика каталога: ");
            label.appendChild(catalogText);
            let heading = document.createElement("select");
            heading.setAttribute("name", "division");
            heading.setAttribute("style", "margin-left: 23px");
            label.appendChild(heading);
            if(formDef1[4].variants[0]){
                let option1 = document.createElement("option");
                heading.appendChild(option1);
                let health = document.createTextNode("здоровье");
                option1.setAttribute("value", "1");
                option1.appendChild(health);
            };
            if(formDef1[4].variants[1]){
                let option2 = document.createElement("option");
                heading.appendChild(option2);
                let home = document.createTextNode("домашний уют");
                option2.setAttribute("value", "2");
                option2.appendChild(home);
            };
            if(formDef1[4].variants[2]){
                let option3 = document.createElement("option");
                heading.appendChild(option3);
                let appliances = document.createTextNode("бытовая техника");
                option3.setAttribute("value", "3");
                option3.appendChild(appliances);
            };
        };
        if(formDef1[5].label1){
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let catalogText = document.createTextNode("Размещение: ");
            label.appendChild(catalogText);
          
            let radioButton1 = document.createElement("input");
            radioButton1.setAttribute('type', 'radio');
            radioButton1.setAttribute("value", "1");
            radioButton1.setAttribute('name', "payment");
            radioButton1.setAttribute("style", "margin-left: 59px");
            label.appendChild(radioButton1);
            if(formDef1[5].variants[0]){
                let free = document.createTextNode("бесплатное");
                label.appendChild(free);
            };
            
            let radioButton2 = document.createElement("input");
            radioButton2.setAttribute('type', 'radio');
            radioButton2.setAttribute("value", "2");
            radioButton2.setAttribute('name', "payment");
            radioButton2.setAttribute("style", "margin-left: 100px");
            label.appendChild(radioButton2);
            if(formDef1[5].variants[1]){
                let paid = document.createTextNode("платное");
                label.appendChild(paid);
            };
          
            let radioButton3 = document.createElement("input");
            radioButton3.setAttribute('type', 'radio');
            radioButton3.setAttribute("value", "3");
            radioButton3.setAttribute('name', "payment");
            radioButton3.setAttribute("style", "margin-left: 100px");
            label.appendChild(radioButton3);
            if(formDef1[5].variants[2]){
                let vip = document.createTextNode("VIP");
                label.appendChild(vip);
            };
        };
        if (formDef1[6].label) {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let review = document.createTextNode("Разрешить отзывы: ");
            label.appendChild(review);
            let allowReviews = document.createElement("input");
            allowReviews.setAttribute("type", "checkbox");
            allowReviews.setAttribute("style","margin-left: 16px");
            allowReviews.setAttribute("name","reviews");
            allowReviews.setAttribute("checked","true");
            label.appendChild(allowReviews);
        };
        if (formDef1[7].label) {
            let label = document.createElement("label");
            form1.appendChild(label);
            let br = document.createElement("br");
            form1.appendChild(br);
            let description = document.createTextNode("Описание сайта: ");
            label.appendChild(description);
            label.appendChild(br);
            let siteDescription = document.createElement("textarea");
            siteDescription.setAttribute("style","width: 650px; height: 50px");
            siteDescription.setAttribute("name","description");
            label.appendChild(siteDescription);
          
        };
        if (formDef1[8].label) {
            let br = document.createElement("br");
            form1.appendChild(br);
            let publish = document.createElement("input");
            publish.setAttribute("type","submit");
            publish.setAttribute("value","Опубликовать");
            form1.appendChild(publish);
         };
        break;

    case formDef2:                   
        if (formDef2[0].label) {
            let hr = document.createElement("hr");
            form2.appendChild(hr);
            let label = document.createElement("label");
            form2.appendChild(label);
            let br = document.createElement("br");
            form2.appendChild(br);
            let surnameText = document.createTextNode("Фамилия: ");
            label.appendChild(surnameText);
            let surname = document.createElement("input");
            surname.setAttribute("type", "text");
            surname.setAttribute("style","margin-left: 80px; width: 300px");
            surname.setAttribute("name","lastname");
            label.appendChild(surname);
        };
        if (formDef2[1].label) {
            let label = document.createElement("label");
            form2.appendChild(label);
            let br = document.createElement("br");
            form2.appendChild(br);
            let nameText = document.createTextNode("Имя: ");
            label.appendChild(nameText);
            let name = document.createElement("input");
            name.setAttribute("type", "text");
            name.setAttribute("style","margin-left: 112px; width: 300px");
            name.setAttribute("name","firstname");
            label.appendChild(name);
        };
        if (formDef2[2].label) {
            let label = document.createElement("label");
            form2.appendChild(label);
            let br = document.createElement("br");
            form2.appendChild(br);
            let secondnameText = document.createTextNode("Отчество: ");
            label.appendChild(secondnameText);
            let secondname = document.createElement("input");
            secondname.setAttribute("type", "text");
            secondname.setAttribute("style","margin-left: 77px; width: 300px");
            secondname.setAttribute("name","secondname");
            label.appendChild(secondname);
        };
        if (formDef2[3].label) {
            let label = document.createElement("label");
            form2.appendChild(label);
            let br = document.createElement("br");
            form2.appendChild(br);
            let ageText = document.createTextNode("Возраст: ");
            label.appendChild(ageText);
            let age = document.createElement("input");
            age.setAttribute("type", "text");
            age.setAttribute("style","margin-left: 86px; width: 300px");
            age.setAttribute("name","age");
            label.appendChild(age);
        };
        if (formDef2[4].label) {
            let signup = document.createElement("input");
            signup.setAttribute("type", "submit");
            signup.setAttribute("value", "Зарегистрироваться");
            form2.appendChild(signup);
        };
    break;
    }
}
